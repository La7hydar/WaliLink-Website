(function () {
    "use strict";

    var translations = {
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.programs": "Programs",
            "nav.pages": "Pages",
            "nav.values": "Our Values",
            "nav.register": "Register",
            "nav.teachers": "Teachers",
            "nav.testimonial": "Testimonial",
            "nav.404": "404 Page",
            "nav.contact": "Contact",
            "nav.apply": "Apply Now",
            "nav.toggle": "Toggle navigation",
            "top.location": "Al-Munawwarah Islamic Boarding School",
            "top.hours": "Sun - Fri : 07.00 AM - 09.00 PM",
            "theme.toggle": "Toggle dark mode",
            "hero.title1": "Nurturing Knowledge, Faith, and Character",
            "hero.title2": "A Home for Qur'anic Learning",
            "hero.learn": "Learn More",
            "hero.programs": "Our Programs",
            "hero.prev": "Previous",
            "hero.next": "Next",
            "facts.quran": "Qur'an First",
            "facts.quranText": "Daily tahfidz and tilawah to help students live with the Qur'an",
            "facts.teachers": "Dedicated Teachers",
            "facts.teachersText": "Experienced asatidz who guide students in knowledge and adab",
            "facts.boarding": "Boarding Life",
            "facts.boardingText": "A disciplined Islamic environment that builds independence and character",
            "metrics.eyebrow": "Growing with purpose",
            "metrics.title": "A meaningful path for every santri",
            "metrics.intro": "A Qur'an-centred education shaped by knowledge, care, and character.",
            "metrics.programs": "Core learning programs",
            "metrics.programsDetail": "Qur'an, Islamic studies, and Arabic.",
            "metrics.pillars": "Pillars of guidance",
            "metrics.pillarsDetail": "Tahfidz, Islamic learning, boarding guidance, and qualified asatidz.",
            "metrics.languages": "Languages for families",
            "metrics.languagesDetail": "Explore the website in English or Indonesian.",
            "about.kicker": "About Us",
            "about.title": "Raising a Generation of Knowledge, Faith, and Noble Character",
            "about.p1": "Pondok Pesantren Al-Munawwarah is an Islamic boarding school dedicated to nurturing students through Qur'anic memorization, Islamic studies, and a disciplined boarding life.",
            "about.p2": "We combine traditional pesantren values with a structured academic program so that every santri grows in knowledge, worship, and everyday adab.",
            "about.item1": "Tahfidz Al-Qur'an",
            "about.item2": "Islamic Studies",
            "about.item3": "Boarding Guidance",
            "about.item4": "Qualified Asatidz",
            "about.read": "Read More",
            "programs.kicker": "Our Programs",
            "programs.title": "Learning Pathways for Every Santri",
            "programs.badge": "Core",
            "programs.tahfidz": "Tahfidz Al-Qur'an",
            "programs.tahfidzText": "Guided memorization, muraja'ah, and beautiful recitation in a daily boarding routine.",
            "programs.islamic": "Islamic Studies",
            "programs.islamicText": "Fiqh, aqidah, akhlaq, and sirah taught with the pesantren tradition of careful study.",
            "programs.arabic": "Arabic Language",
            "programs.arabicText": "Practical Arabic to understand the Qur'an, classical books, and daily conversation.",
            "programs.levelAll": "All Levels",
            "programs.levelBeginner": "Beginner",
            "programs.duration": "Full Year",
            "programs.read": "Read More",
            "form.visit": "Visit & Register",
            "form.name": "Your Name",
            "form.email": "Your Email",
            "form.program": "Program of Interest",
            "form.age": "Student Age",
            "form.message": "Message",
            "form.guardianName": "Guardian's Full Name",
            "form.selectProgram": "Select a program",
            "form.programTahfidz": "Tahfidz Al-Qur'an",
            "form.programIslamic": "Islamic Studies",
            "form.programArabic": "Arabic Language",
            "form.programOther": "Other",
            "form.messageNotice": "Do not include passwords, financial details, or sensitive medical information.",
            "form.consent": "I agree that the pondok may use this information to respond to my registration inquiry.",
            "form.success": "Your inquiry has been sent. We will contact you about the next steps.",
            "form.error": "We could not send your inquiry. Please try again later or contact the pondok directly.",
            "form.sending": "Sending...",
            "form.send": "Send Inquiry",
            "form.submit": "Submit",
            "form.subject": "Subject",
            "form.sendMessage": "Send Message",
            "why.kicker": "Why Choose Us",
            "why.title": "A Trusted Islamic Boarding School for Your Children",
            "why.text": "Al-Munawwarah offers a balanced pesantren education: Qur'an, Islamic knowledge, character building, and a caring boarding community.",
            "why.item1": "Qur'an Centered",
            "why.item1Text": "Memorization and recitation are at the heart of daily pesantren life",
            "why.item2": "Caring Mentors",
            "why.item2Text": "Teachers and musyrif accompany students in learning and worship",
            "why.item3": "Character Building",
            "why.item3Text": "Adab, independence, and responsibility are trained every day",
            "why.item4": "Safe Boarding",
            "why.item4Text": "A structured campus environment that parents can trust",
            "team.kicker": "Meet The Teachers",
            "team.title": "Asatidz Who Guide With Knowledge and Care",
            "team.name": "Ustadz Name",
            "team.role": "Teacher",
            "testi.kicker": "Testimonial",
            "testi.title": "What Parents and Alumni Say",
            "testi.q1": "Al-Munawwarah helped my child grow in Qur'an, manners, and independence. The teachers are caring and the boarding life is well guided.",
            "testi.n1": "Ahmad's Parent",
            "testi.r1": "Parent of a Santri",
            "testi.q2": "The tahfidz program is consistent and the asatidz are patient. My daughter became more confident in her recitation and daily worship.",
            "testi.n2": "Fatimah's Parent",
            "testi.r2": "Parent of a Santriwati",
            "testi.q3": "Living at the pondok taught me discipline, friendship, and love for knowledge. I am grateful for the guidance I received here.",
            "testi.n3": "Alumni Santri",
            "testi.r3": "Graduate",
            "footer.touch": "Get In Touch",
            "footer.quick": "Quick Links",
            "footer.popular": "Popular Links",
            "footer.news": "Newsletter",
            "footer.follow": "Follow Us",
            "footer.signup": "Sign Up",
            "footer.emailPh": "Your Email Address",
            "footer.about": "About Us",
            "footer.contact": "Contact Us",
            "footer.programs": "Our Programs",
            "footer.register": "Visit & Register",
            "footer.teachers": "Teachers",
            "copy.rights": ", All Rights Reserved.",
            "page.about": "About Us",
            "page.programs": "Programs",
            "page.values": "Our Values",
            "page.register": "Visit & Register",
            "page.teachers": "Teachers",
            "page.testimonial": "Testimonial",
            "page.contact": "Contact",
            "page.404": "404 Error",
            "crumb.home": "Home",
            "crumb.pages": "Pages",
            "contact.kicker": "Contact Us",
            "contact.title": "Have a Question? Please Reach Out to the Pondok",
            "contact.text": "Parents and prospective santri are welcome to contact Pondok Pesantren Al-Munawwarah for admission, visits, and general information.",
            "register.kicker": "Visit & Register",
            "register.title": "Plan a Visit or Register Your Child at Al-Munawwarah",
            "register.formIntro": "Send an initial registration inquiry. Our team will contact you about the next steps.",
            "err.title": "Page Not Found",
            "err.text": "The page you are looking for is not available. Please return to the pondok homepage.",
            "err.home": "Back To Home"
        },
        id: {
            "nav.home": "Beranda",
            "nav.about": "Tentang",
            "nav.programs": "Program",
            "nav.pages": "Halaman",
            "nav.values": "Nilai Kami",
            "nav.register": "Daftar",
            "nav.teachers": "Asatidz",
            "nav.testimonial": "Testimoni",
            "nav.404": "Halaman 404",
            "nav.contact": "Kontak",
            "nav.apply": "Daftar Sekarang",
            "nav.toggle": "Buka navigasi",
            "top.location": "Pondok Pesantren Al-Munawwarah",
            "top.hours": "Ahad - Jumat : 07.00 - 21.00",
            "theme.toggle": "Ubah mode gelap",
            "hero.title1": "Menumbuhkan Ilmu, Iman, dan Akhlak",
            "hero.title2": "Rumah untuk Belajar Al-Qur'an",
            "hero.learn": "Selengkapnya",
            "hero.programs": "Program Kami",
            "hero.prev": "Sebelumnya",
            "hero.next": "Berikutnya",
            "facts.quran": "Al-Qur'an Utama",
            "facts.quranText": "Tahfidz dan tilawah harian agar santri hidup bersama Al-Qur'an",
            "facts.teachers": "Asatidz Berpengalaman",
            "facts.teachersText": "Para asatidz mendampingi santri dalam ilmu dan adab",
            "facts.boarding": "Kehidupan Pondok",
            "facts.boardingText": "Lingkungan Islami yang menumbuhkan kemandirian dan karakter",
            "metrics.eyebrow": "Tumbuh dengan tujuan",
            "metrics.title": "Perjalanan bermakna bagi setiap santri",
            "metrics.intro": "Pendidikan yang berpusat pada Al-Qur'an, dibentuk oleh ilmu, kepedulian, dan akhlak.",
            "metrics.programs": "Program belajar utama",
            "metrics.programsDetail": "Al-Qur'an, kajian Islam, dan bahasa Arab.",
            "metrics.pillars": "Pilar pendampingan",
            "metrics.pillarsDetail": "Tahfidz, kajian Islam, bimbingan asrama, dan asatidz berkualitas.",
            "metrics.languages": "Bahasa untuk keluarga",
            "metrics.languagesDetail": "Jelajahi situs dalam bahasa Indonesia atau Inggris.",
            "about.kicker": "Tentang Kami",
            "about.title": "Membina Generasi Berilmu, Beriman, dan Berakhlak Mulia",
            "about.p1": "Pondok Pesantren Al-Munawwarah adalah lembaga pendidikan Islam yang membina santri melalui tahfidz Al-Qur'an, ilmu agama, dan kehidupan asrama yang tertib.",
            "about.p2": "Kami memadukan nilai pesantren dengan program akademik yang terstruktur agar setiap santri tumbuh dalam ilmu, ibadah, dan adab sehari-hari.",
            "about.item1": "Tahfidz Al-Qur'an",
            "about.item2": "Kajian Islam",
            "about.item3": "Bimbingan Asrama",
            "about.item4": "Asatidz Berkualitas",
            "about.read": "Selengkapnya",
            "programs.kicker": "Program Kami",
            "programs.title": "Jalur Belajar untuk Setiap Santri",
            "programs.badge": "Inti",
            "programs.tahfidz": "Tahfidz Al-Qur'an",
            "programs.tahfidzText": "Hafalan terarah, muraja'ah, dan tilawah indah dalam rutinitas harian pondok.",
            "programs.islamic": "Kajian Islam",
            "programs.islamicText": "Fiqih, akidah, akhlak, dan sirah diajarkan dengan tradisi pesantren yang teliti.",
            "programs.arabic": "Bahasa Arab",
            "programs.arabicText": "Bahasa Arab praktis untuk memahami Al-Qur'an, kitab, dan percakapan harian.",
            "programs.levelAll": "Semua Tingkat",
            "programs.levelBeginner": "Pemula",
            "programs.duration": "Setahun Penuh",
            "programs.read": "Selengkapnya",
            "form.visit": "Kunjungan & Daftar",
            "form.name": "Nama Anda",
            "form.email": "Email Anda",
            "form.program": "Program yang Diminati",
            "form.age": "Usia Santri",
            "form.message": "Pesan",
            "form.guardianName": "Nama Lengkap Wali",
            "form.selectProgram": "Pilih program",
            "form.programTahfidz": "Tahfidz Al-Qur'an",
            "form.programIslamic": "Kajian Islam",
            "form.programArabic": "Bahasa Arab",
            "form.programOther": "Lainnya",
            "form.messageNotice": "Jangan sertakan kata sandi, data keuangan, atau informasi medis sensitif.",
            "form.consent": "Saya setuju pondok menggunakan data ini untuk menanggapi permintaan pendaftaran saya.",
            "form.success": "Permintaan Anda terkirim. Tim kami akan menghubungi Anda untuk langkah selanjutnya.",
            "form.error": "Permintaan belum dapat dikirim. Silakan coba lagi nanti atau hubungi pondok secara langsung.",
            "form.sending": "Mengirim...",
            "form.send": "Kirim Permintaan",
            "form.submit": "Kirim",
            "form.subject": "Subjek",
            "form.sendMessage": "Kirim Pesan",
            "why.kicker": "Mengapa Memilih Kami",
            "why.title": "Pesantren Terpercaya untuk Putra-Putri Anda",
            "why.text": "Al-Munawwarah menawarkan pendidikan pesantren yang seimbang: Al-Qur'an, ilmu agama, pembentukan karakter, dan komunitas asrama yang peduli.",
            "why.item1": "Berpusat pada Al-Qur'an",
            "why.item1Text": "Hafalan dan tilawah menjadi jantung kehidupan harian pesantren",
            "why.item2": "Pendamping yang Peduli",
            "why.item2Text": "Guru dan musyrif mendampingi santri dalam belajar dan ibadah",
            "why.item3": "Pembentukan Karakter",
            "why.item3Text": "Adab, kemandirian, dan tanggung jawab dilatih setiap hari",
            "why.item4": "Asrama yang Aman",
            "why.item4Text": "Lingkungan kampus yang tertib dan dapat dipercaya orang tua",
            "team.kicker": "Kenali Asatidz",
            "team.title": "Asatidz yang Membimbing dengan Ilmu dan Kepedulian",
            "team.name": "Nama Ustadz",
            "team.role": "Pengajar",
            "testi.kicker": "Testimoni",
            "testi.title": "Kata Orang Tua dan Alumni",
            "testi.q1": "Al-Munawwarah membantu anak kami tumbuh dalam Al-Qur'an, adab, dan kemandirian. Para guru peduli dan kehidupan asrama terarah.",
            "testi.n1": "Orang Tua Ahmad",
            "testi.r1": "Wali Santri",
            "testi.q2": "Program tahfidznya konsisten dan asatidznya sabar. Putri kami lebih percaya diri dalam tilawah dan ibadah harian.",
            "testi.n2": "Orang Tua Fatimah",
            "testi.r2": "Wali Santriwati",
            "testi.q3": "Hidup di pondok mengajarkan disiplin, persahabatan, dan cinta ilmu. Saya bersyukur atas bimbingan yang diterima.",
            "testi.n3": "Alumni Santri",
            "testi.r3": "Lulusan",
            "footer.touch": "Hubungi Kami",
            "footer.quick": "Tautan Cepat",
            "footer.popular": "Tautan Populer",
            "footer.news": "Buletin",
            "footer.follow": "Ikuti Kami",
            "footer.signup": "Daftar",
            "footer.emailPh": "Alamat Email Anda",
            "footer.about": "Tentang Kami",
            "footer.contact": "Kontak",
            "footer.programs": "Program Kami",
            "footer.register": "Kunjungan & Daftar",
            "footer.teachers": "Asatidz",
            "copy.rights": ", Hak Cipta Dilindungi.",
            "page.about": "Tentang Kami",
            "page.programs": "Program",
            "page.values": "Nilai Kami",
            "page.register": "Kunjungan & Daftar",
            "page.teachers": "Asatidz",
            "page.testimonial": "Testimoni",
            "page.contact": "Kontak",
            "page.404": "Kesalahan 404",
            "crumb.home": "Beranda",
            "crumb.pages": "Halaman",
            "contact.kicker": "Kontak Kami",
            "contact.title": "Ada Pertanyaan? Silakan Hubungi Pondok",
            "contact.text": "Orang tua dan calon santri dapat menghubungi Pondok Pesantren Al-Munawwarah untuk pendaftaran, kunjungan, dan informasi umum.",
            "register.kicker": "Kunjungan & Daftar",
            "register.title": "Rencanakan Kunjungan atau Daftarkan Putra-Putri Anda",
            "register.formIntro": "Kirim permintaan pendaftaran awal. Tim kami akan menghubungi Anda mengenai langkah selanjutnya.",
            "err.title": "Halaman Tidak Ditemukan",
            "err.text": "Halaman yang Anda cari tidak tersedia. Silakan kembali ke beranda pondok.",
            "err.home": "Kembali ke Beranda"
        }
    };

    function getLang() {
        return localStorage.getItem("am-lang") === "id" ? "id" : "en";
    }

    function getTheme() {
        return localStorage.getItem("am-theme") === "dark" ? "dark" : "light";
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("am-theme", theme);
        document.querySelectorAll(".theme-toggle i").forEach(function (icon) {
            icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
        });
        document.querySelectorAll(".theme-toggle").forEach(function (btn) {
            var label = (translations[getLang()] || translations.en)["theme.toggle"];
            btn.setAttribute("aria-label", label);
            btn.setAttribute("title", label);
        });
    }

    function applyLanguage(lang) {
        var dict = translations[lang] || translations.en;
        document.documentElement.setAttribute("lang", lang === "id" ? "id" : "en");
        localStorage.setItem("am-lang", lang);

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-placeholder");
            if (dict[key]) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-aria");
            if (dict[key]) {
                el.setAttribute("aria-label", dict[key]);
            }
        });

        document.querySelectorAll(".lang-btn").forEach(function (btn) {
            btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
        });

        applyTheme(getTheme());
    }

    document.addEventListener("click", function (e) {
        var themeBtn = e.target.closest(".theme-toggle");
        if (themeBtn) {
            applyTheme(getTheme() === "dark" ? "light" : "dark");
            return;
        }
        var langBtn = e.target.closest(".lang-btn");
        if (langBtn) {
            applyLanguage(langBtn.getAttribute("data-lang") === "id" ? "id" : "en");
        }
    });

    applyTheme(getTheme());
    applyLanguage(getLang());
})();
