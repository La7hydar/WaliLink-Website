(function () {
    "use strict";

    var form = document.getElementById("registration-form");
    if (!form) {
        return;
    }

    var endpoint = "https://rmwfyfabalbxebutvkwh.supabase.co/functions/v1/registration-inquiry";
    var publishableKey = "sb_publishable_kh1KQ37VGfzr7AT5iooxiA_6YimDarf";
    var status = document.getElementById("registration-status");
    var submitButton = document.getElementById("registration-submit");

    if (!status || !submitButton) {
        console.error("The registration form is missing its status message or submit button.");
        return;
    }

    function getMessage(key) {
        var lang = document.documentElement.lang === "id" ? "id" : "en";
        var messages = {
            id: {
                "form.error": "Permintaan belum dapat dikirim. Silakan coba lagi nanti atau hubungi pondok secara langsung.",
                "form.invalid": "Periksa kembali data yang Anda masukkan, lalu coba lagi.",
                "form.setupError": "Layanan pendaftaran belum terhubung dengan benar. Silakan hubungi pondok secara langsung.",
                "form.timeout": "Pengiriman terlalu lama. Periksa koneksi Anda lalu coba lagi.",
                "form.sending": "Mengirim...",
                "form.success": "Permintaan Anda terkirim. Tim kami akan menghubungi Anda untuk langkah selanjutnya."
            },
            en: {
                "form.error": "We could not send your inquiry. Please try again later or contact the pondok directly.",
                "form.invalid": "Please check the information you entered and try again.",
                "form.setupError": "The enrollment service is not configured correctly yet. Please contact the pondok directly.",
                "form.timeout": "The request took too long. Check your connection and try again.",
                "form.sending": "Sending...",
                "form.success": "Your inquiry has been sent. We will contact you about the next steps."
            }
        };
        return messages[lang][key];
    }

    function showStatus(message, isError) {
        status.textContent = message;
        status.setAttribute("aria-live", isError ? "assertive" : "polite");
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        var values = new FormData(form);
        var payload = {
            guardianName: String(values.get("guardianName") || "").trim(),
            email: String(values.get("email") || "").trim(),
            program: String(values.get("program") || ""),
            studentAge: Number(values.get("studentAge")),
            message: String(values.get("message") || "").trim(),
            consent: values.get("consent") === "on",
            website: String(values.get("website") || "").trim()
        };

        var controller = new AbortController();
        var timeoutId = window.setTimeout(function () {
            controller.abort();
        }, 15000);

        submitButton.disabled = true;
        form.setAttribute("aria-busy", "true");
        showStatus(getMessage("form.sending"), false);

        try {
            var response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": publishableKey
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            if (!response.ok) {
                console.error("Registration request failed with status", response.status);
                if (response.status === 400) {
                    showStatus(getMessage("form.invalid"), true);
                } else if (response.status === 401 || response.status === 403) {
                    showStatus(getMessage("form.setupError"), true);
                } else {
                    showStatus(getMessage("form.error"), true);
                }
                return;
            }

            form.reset();
            showStatus(getMessage("form.success"), false);
        } catch (error) {
            if (error.name === "AbortError") {
                showStatus(getMessage("form.timeout"), true);
            } else {
                showStatus(getMessage("form.error"), true);
                console.error("Unable to submit registration inquiry.", error);
            }
        } finally {
            window.clearTimeout(timeoutId);
            submitButton.disabled = false;
            form.removeAttribute("aria-busy");
        }
    });
})();
