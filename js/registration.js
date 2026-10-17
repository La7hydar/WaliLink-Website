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

    function getMessage(key) {
        var lang = document.documentElement.lang === "id" ? "id" : "en";
        var messages = {
            id: {
                "form.error": "Permintaan belum dapat dikirim. Silakan coba lagi nanti atau hubungi pondok secara langsung.",
                "form.sending": "Mengirim...",
                "form.success": "Permintaan Anda terkirim. Tim kami akan menghubungi Anda untuk langkah selanjutnya."
            },
            en: {
                "form.error": "We could not send your inquiry. Please try again later or contact the pondok directly.",
                "form.sending": "Sending...",
                "form.success": "Your inquiry has been sent. We will contact you about the next steps."
            }
        };
        return messages[lang][key];
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        status.textContent = "";

        if (!form.reportValidity()) {
            return;
        }

        var values = new FormData(form);
        var payload = {
            guardianName: values.get("guardianName"),
            email: values.get("email"),
            program: values.get("program"),
            studentAge: Number(values.get("studentAge")),
            message: values.get("message"),
            consent: values.get("consent") === "on",
            website: values.get("website")
        };

        submitButton.disabled = true;
        status.textContent = getMessage("form.sending");

        try {
            var response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": publishableKey
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Registration request failed with status " + response.status);
            }

            form.reset();
            status.textContent = getMessage("form.success");
        } catch (error) {
            status.textContent = getMessage("form.error");
            console.error("Unable to submit registration inquiry.", error);
        } finally {
            submitButton.disabled = false;
        }
    });
})();
