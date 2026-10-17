import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
};

const maxBodyBytes = 4096;
const programs = new Set(["tahfidz", "islamic_studies", "arabic_language", "other"]);

function jsonResponse(status: number, body: Record<string, string>): Response {
    return new Response(JSON.stringify(body), {
        status,
        headers: corsHeaders,
    });
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function readBody(req: Request): Promise<string | null> {
    const reader = req.body?.getReader();
    if (!reader) {
        return null;
    }

    const chunks: Uint8Array[] = [];
    let totalBytes = 0;

    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }

        totalBytes += value.byteLength;
        if (totalBytes > maxBodyBytes) {
            await reader.cancel();
            return null;
        }
        chunks.push(value);
    }

    const body = new Uint8Array(totalBytes);
    let offset = 0;
    for (const chunk of chunks) {
        body.set(chunk, offset);
        offset += chunk.byteLength;
    }
    return new TextDecoder().decode(body);
}

Deno.serve(async (req: Request) => {
    if (req.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders });
    }
    if (req.method !== "POST") {
        return jsonResponse(405, { error: "Method not allowed." });
    }
    if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
        return jsonResponse(415, { error: "Content-Type must be application/json." });
    }

    const rawBody = await readBody(req);
    if (!rawBody) {
        return jsonResponse(413, { error: "Request body is missing or too large." });
    }

    let parsed: unknown;
    try {
        parsed = JSON.parse(rawBody);
    } catch {
        return jsonResponse(400, { error: "Invalid request." });
    }
    if (!isRecord(parsed)) {
        return jsonResponse(400, { error: "Invalid request." });
    }

    const input = parsed;
    const guardianName = typeof input.guardianName === "string" ? input.guardianName.trim() : "";
    const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
    const program = typeof input.program === "string" ? input.program : "";
    const studentAge = input.studentAge;
    const message = typeof input.message === "string" ? input.message.trim() : "";
    const website = typeof input.website === "string" ? input.website.trim() : "";

    if (website) {
        return jsonResponse(200, { message: "Inquiry received." });
    }
    if (
        guardianName.length < 2
        || guardianName.length > 100
        || /[\u0000-\u001f\u007f]/.test(guardianName)
        || email.length > 254
        || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        || !programs.has(program)
        || typeof studentAge !== "number"
        || !Number.isInteger(studentAge)
        || studentAge < 4
        || studentAge > 25
        || message.length > 500
        || input.consent !== true
    ) {
        return jsonResponse(400, { error: "Please check the form and try again." });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
        console.error("Registration inquiry service is missing Supabase configuration.");
        return jsonResponse(503, { error: "The registration service is unavailable." });
    }

    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/admission_inquiries`, {
            method: "POST",
            headers: {
                "apikey": serviceRoleKey,
                "Authorization": `Bearer ${serviceRoleKey}`,
                "Content-Type": "application/json",
                "Prefer": "return=minimal",
            },
            body: JSON.stringify({
                guardian_name: guardianName,
                guardian_email: email,
                program,
                student_age: studentAge,
                message,
                consented_at: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            console.error("Registration inquiry insert failed with status", response.status);
            return jsonResponse(503, { error: "The registration service is unavailable." });
        }

        return jsonResponse(201, { message: "Inquiry received." });
    } catch (error) {
        console.error("Registration inquiry request failed.", error);
        return jsonResponse(503, { error: "The registration service is unavailable." });
    }
});
