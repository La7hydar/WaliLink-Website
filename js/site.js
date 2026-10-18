(function () {
    "use strict";

    var translations = {
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.programs": "Programs",
            "nav.pages": "Pages",
            "nav.values": "Our Values",
            "nav.register": "Enroll Your Child",
            "nav.teachers": "Teachers",
            "nav.testimonial": "Testimonial",
            "nav.404": "404 Page",
            "nav.contact": "Contact",
            "nav.apply": "Start Enrollment",
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
            "about.pathwayKicker": "A balanced learning journey",
            "about.pathwayTitle": "Knowledge grows through practice and community",
            "about.pathwayIntro": "The pondok brings together Qur'anic learning, Islamic knowledge, and the shared routines that help santri grow.",
            "about.pathwayQuran": "Learn with the Qur'an",
            "about.pathwayQuranText": "Daily recitation, memorization, and muraja'ah make the Qur'an part of students' learning routine.",
            "about.pathwayKnowledge": "Build a foundation of knowledge",
            "about.pathwayKnowledgeText": "Islamic studies and Arabic support understanding, thoughtful questions, and continued learning.",
            "about.pathwayCharacter": "Practice character together",
            "about.pathwayCharacterText": "Boarding life, teamwork, and shared responsibilities give santri ways to practice adab and independence.",
            "about.explorePrograms": "Explore programs",
            "about.lifeKicker": "Life at the Pondok",
            "about.lifeTitle": "Learning happens in many ways",
            "about.lifeQuran": "Qur'an study and muraja'ah",
            "about.meetTeachers": "Meet the asatidz",
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
            "programs.experienceBadge": "Experience",
            "programs.character": "Character and teamwork",
            "programs.characterText": "Scouting, exercise, and shared activities give santri ways to practice cooperation and responsibility.",
            "form.visit": "Start Your Child's Enrollment",
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
            "form.submit": "Send Enrollment Inquiry",
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
            "team.kicker": "Meet Our Team",
            "team.title": "People Behind Learning and Daily Life",
            "team.mudir": "Dr. Kh. Amaluddin Lamani, Lc., M.A.",
            "team.mudirRole": "Mudir (Head of the Pondok)",
            "team.azmi": "Gus Azmi Syahid",
            "team.azmiRole": "Ustadz and the kiai's second child",
            "team.najwa": "Ustadzah Najwa",
            "team.najwaRole": "Ustadzah and mentor",
            "team.ikhsan": "Serda Muhammad Ikhsan",
            "team.ikhsanRole": "Former ustadz",
            "testi.kicker": "People of Al-Munawwarah",
            "testi.title": "Stories from Our Pondok Community",
            "testi.note": "These are draft opinions written for review by each speaker. Please confirm with them before publishing as personal statements.",
            "testi.q1": "I feel that the pondok helps me grow closer to the Qur'an while learning discipline, independence, and adab in daily life.",
            "testi.n1": "Vita Citra Agung",
            "testi.r1": "Santri",
            "testi.q2": "I value how Al-Munawwarah brings Qur'anic learning, worship, and care for students together every day.",
            "testi.n2": "Gus Azmi Syahid",
            "testi.r2": "Ustadz; the kiai's second son",
            "testi.q3": "For me, pondok life is about growing in knowledge and friendship while sharing worship and activities.",
            "testi.n3": "Rehan",
            "testi.r3": "Santri",
            "testi.q4": "I believe a caring routine helps santri feel supported as they learn, worship, and build good character.",
            "testi.n4": "Ustadzah Najwa",
            "testi.r4": "Ustadzah and mentor",
            "testi.q5": "I value the discipline and sense of responsibility the pondok encourages alongside learning and worship.",
            "testi.n5": "Serda Muhammad Ikhsan",
            "testi.r5": "Former ustadz",
            "testi.q6": "I appreciate how reliable technology can support learning and the pondok's daily activities.",
            "testi.n6": "Ahnaf Haidar",
            "testi.r6": "IT support",
            "gallery.kicker": "Life at Al-Munawwarah",
            "gallery.title": "Learning, Worship, and Growing Together",
            "gallery.ngaji": "Qur'an Study for Santriwati",
            "gallery.pramukaGirls": "Scouting Activities for Santriwati",
            "gallery.pramukaGirlsTwo": "Scouting Together",
            "gallery.pramukaBoys": "Scouting and Team Spirit",
            "gallery.cooking": "Cooking Together with the Regent",
            "gallery.exam": "End-of-Exams Gathering",
            "gallery.exercise": "Morning Exercise",
            "gallery.hajj": "Learning the Hajj Rites",
            "gallery.hajjIntro": "A hands-on manasik experience helps santri learn the stages and meaning of Hajj.",
            "gallery.hajjPhoto1": "Santri practicing the Hajj rites",
            "gallery.hajjPhoto2": "A learning moment during manasik",
            "gallery.hajjPhoto3": "Practicing the Hajj journey together",
            "gallery.hajjPhoto4": "Learning through shared practice",
            "gallery.more": "More Activities",
            "activities.rhythmTitle": "A rhythm of learning and practice",
            "activities.rhythmText": "Qur'anic study is at the heart of pondok life, alongside practical lessons, shared responsibilities, and activities that build confidence.",
            "activities.valuesKicker": "Learning by doing",
            "activities.valuesTitle": "Faith, knowledge, and character in action",
            "activities.valuesText": "From Qur'an study to manasik and scouting, students learn through guidance, repetition, and community.",
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
            "footer.register": "Enroll Your Child",
            "footer.teachers": "Our Team",
            "copy.rights": ", All Rights Reserved.",
            "page.about": "About Us",
            "page.programs": "Programs",
            "page.values": "Our Values",
            "page.register": "Enroll Your Child",
            "page.teachers": "Our Team",
            "page.testimonial": "Testimonial",
            "page.contact": "Contact",
            "page.404": "404 Error",
            "crumb.home": "Home",
            "crumb.pages": "Pages",
            "contact.kicker": "Contact Us",
            "contact.title": "Begin a Conversation About Enrollment",
            "contact.text": "Send an enrollment inquiry and our team can follow up with information about the next steps.",
            "contact.admissionTitle": "A clear first step for your family",
            "contact.admissionText": "Use the enrollment form to tell us which program interests your child. The pondok will receive your inquiry and follow up about the admissions process.",
            "contact.stepsTitle": "What happens next?",
            "contact.step1": "Send your inquiry",
            "contact.step1Text": "Share a guardian contact, age, and program of interest.",
            "contact.step2": "The pondok reviews it",
            "contact.step2Text": "Your information is stored securely as an admissions inquiry.",
            "contact.step3": "Continue with the team",
            "contact.step3Text": "The pondok will contact you with the next admissions steps.",
            "contact.lifeKicker": "Get to know pondok life",
            "contact.lifeTitle": "A glimpse of learning and community",
            "contact.lifeIntro": "Explore real activities at Al-Munawwarah while you consider the right next step for your family.",
            "contact.faqKicker": "Common questions",
            "contact.faqTitle": "Before you send an inquiry",
            "contact.faq1": "Does the inquiry complete enrollment?",
            "contact.faq1Text": "No. It is an initial request for information. The pondok team will explain the official enrollment requirements and next steps.",
            "contact.faq2": "What details should I provide?",
            "contact.faq2Text": "Share a guardian's name and email, the student's age, and the program you are interested in. A message is optional.",
            "contact.faq3": "What should I leave out?",
            "contact.faq3Text": "Do not include passwords, payment details, or sensitive medical information in the inquiry.",
            "contact.sendInquiry": "Send an enrollment inquiry",
            "register.kicker": "Enroll Your Child",
            "register.title": "Take the First Step Toward Your Child's Enrollment",
            "register.formIntro": "This form sends an initial admissions inquiry to the pondok. It is not a completed enrollment; our team will contact you about the next steps.",
            "register.stepsTitle": "How the enrollment inquiry works",
            "register.step1": "1. Share your details",
            "register.step1Text": "Tell us how to reach you and which program interests your child.",
            "register.step2": "2. We receive your inquiry",
            "register.step2Text": "Your form is saved to the admissions inquiry database for the pondok team.",
            "register.step3": "3. Continue with our team",
            "register.step3Text": "The team follows up to explain requirements and the official enrollment process.",
            "register.privacyNote": "Only the information needed to respond is requested. Please do not send passwords, payment details, or sensitive health information.",
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
            "nav.register": "Daftarkan Anak Anda",
            "nav.teachers": "Tim Kami",
            "nav.testimonial": "Testimoni",
            "nav.404": "Halaman 404",
            "nav.contact": "Kontak",
            "nav.apply": "Mulai Pendaftaran",
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
            "about.pathwayKicker": "Perjalanan belajar yang seimbang",
            "about.pathwayTitle": "Ilmu tumbuh melalui praktik dan kebersamaan",
            "about.pathwayIntro": "Pondok memadukan pembelajaran Al-Qur'an, ilmu agama, dan rutinitas bersama yang mendukung tumbuh kembang santri.",
            "about.pathwayQuran": "Belajar bersama Al-Qur'an",
            "about.pathwayQuranText": "Tilawah, hafalan, dan muraja'ah harian menjadikan Al-Qur'an bagian dari rutinitas belajar santri.",
            "about.pathwayKnowledge": "Membangun dasar keilmuan",
            "about.pathwayKnowledgeText": "Kajian Islam dan bahasa Arab mendukung pemahaman, pertanyaan yang baik, dan semangat belajar berkelanjutan.",
            "about.pathwayCharacter": "Melatih karakter bersama",
            "about.pathwayCharacterText": "Kehidupan asrama, kerja sama, dan tanggung jawab bersama menjadi ruang berlatih adab dan kemandirian.",
            "about.explorePrograms": "Jelajahi program",
            "about.lifeKicker": "Kehidupan di Pondok",
            "about.lifeTitle": "Belajar melalui banyak pengalaman",
            "about.lifeQuran": "Mengaji dan muraja'ah Al-Qur'an",
            "about.meetTeachers": "Kenali para asatidz",
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
            "programs.experienceBadge": "Pengalaman",
            "programs.character": "Karakter dan kerja sama",
            "programs.characterText": "Pramuka, olahraga, dan kegiatan bersama menjadi ruang bagi santri untuk melatih kerja sama dan tanggung jawab.",
            "form.visit": "Mulai Pendaftaran Anak",
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
            "form.submit": "Kirim Permintaan Pendaftaran",
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
            "team.kicker": "Kenali Tim Kami",
            "team.title": "Orang-orang di Balik Pembelajaran dan Keseharian",
            "team.mudir": "Dr. Kh. Amaluddin Lamani, Lc., M.A.",
            "team.mudirRole": "Mudir Pondok",
            "team.azmi": "Gus Azmi Syahid",
            "team.azmiRole": "Ustadz dan anak kedua kiai pondok",
            "team.najwa": "Ustadzah Najwa",
            "team.najwaRole": "Ustadzah dan pembimbing",
            "team.ikhsan": "Serda Muhammad Ikhsan",
            "team.ikhsanRole": "Mantan ustadz",
            "testi.kicker": "Keluarga Al-Munawwarah",
            "testi.title": "Cerita dari Lingkungan Pondok",
            "testi.note": "Ini draf pendapat yang disusun untuk ditinjau masing-masing narasumber. Mohon konfirmasi kepada mereka sebelum diterbitkan sebagai pernyataan pribadi.",
            "testi.q1": "Menurut saya, kehidupan pondok membantu saya lebih dekat dengan Al-Qur'an sambil belajar disiplin, mandiri, dan menjaga adab sehari-hari.",
            "testi.n1": "Vita Citra Agung",
            "testi.r1": "Santri",
            "testi.q2": "Saya menghargai cara Al-Munawwarah memadukan pembelajaran Al-Qur'an, ibadah, dan kepedulian kepada santri setiap hari.",
            "testi.n2": "Gus Azmi Syahid",
            "testi.r2": "Ustadz; anak kedua kiai pondok",
            "testi.q3": "Bagi saya, kehidupan pondok berarti tumbuh dalam ilmu dan persahabatan sambil menjalani ibadah serta kegiatan bersama.",
            "testi.n3": "Rehan",
            "testi.r3": "Santri",
            "testi.q4": "Saya percaya rutinitas yang penuh kepedulian membuat santri merasa didampingi saat belajar, beribadah, dan membangun akhlak.",
            "testi.n4": "Ustadzah Najwa",
            "testi.r4": "Ustadzah dan pembimbing",
            "testi.q5": "Saya menghargai kedisiplinan dan rasa tanggung jawab yang ditanamkan pondok bersama pembelajaran dan ibadah.",
            "testi.n5": "Serda Muhammad Ikhsan",
            "testi.r5": "Mantan ustadz",
            "testi.q6": "Menurut saya, teknologi yang andal dapat mendukung pembelajaran dan kegiatan harian pondok.",
            "testi.n6": "Ahnaf Haidar",
            "testi.r6": "Dukungan IT",
            "gallery.kicker": "Kehidupan Al-Munawwarah",
            "gallery.title": "Belajar, Beribadah, dan Tumbuh Bersama",
            "gallery.ngaji": "Mengaji Bersama Santriwati",
            "gallery.pramukaGirls": "Kegiatan Pramuka Santriwati",
            "gallery.pramukaGirlsTwo": "Kebersamaan dalam Pramuka",
            "gallery.pramukaBoys": "Pramuka dan Semangat Kebersamaan",
            "gallery.cooking": "Memasak Bersama Ibu Bupati",
            "gallery.exam": "Kebersamaan Penutupan Ujian",
            "gallery.exercise": "Senam Pagi",
            "gallery.hajj": "Belajar Manasik Haji",
            "gallery.hajjIntro": "Pengalaman manasik secara langsung membantu santri mempelajari tahapan dan makna ibadah haji.",
            "gallery.hajjPhoto1": "Santri berlatih rangkaian manasik haji",
            "gallery.hajjPhoto2": "Momen belajar dalam kegiatan manasik",
            "gallery.hajjPhoto3": "Berlatih perjalanan haji bersama",
            "gallery.hajjPhoto4": "Belajar melalui praktik bersama",
            "gallery.more": "Kegiatan Lainnya",
            "activities.rhythmTitle": "Ritme belajar dan praktik",
            "activities.rhythmText": "Kajian Al-Qur'an menjadi inti kehidupan pondok, berdampingan dengan pelajaran praktik, tanggung jawab bersama, dan kegiatan yang membangun kepercayaan diri.",
            "activities.valuesKicker": "Belajar melalui praktik",
            "activities.valuesTitle": "Iman, ilmu, dan akhlak dalam keseharian",
            "activities.valuesText": "Dari belajar Al-Qur'an hingga manasik dan pramuka, santri belajar melalui bimbingan, pengulangan, dan kebersamaan.",
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
            "footer.register": "Daftarkan Anak Anda",
            "footer.teachers": "Tim Kami",
            "copy.rights": ", Hak Cipta Dilindungi.",
            "page.about": "Tentang Kami",
            "page.programs": "Program",
            "page.values": "Nilai Kami",
            "page.register": "Daftarkan Anak Anda",
            "page.teachers": "Tim Kami",
            "page.testimonial": "Testimoni",
            "page.contact": "Kontak",
            "page.404": "Kesalahan 404",
            "crumb.home": "Beranda",
            "crumb.pages": "Halaman",
            "contact.kicker": "Kontak Kami",
            "contact.title": "Mulai Percakapan tentang Pendaftaran",
            "contact.text": "Kirim permintaan informasi pendaftaran dan tim pondok dapat menghubungi Anda mengenai langkah selanjutnya.",
            "contact.admissionTitle": "Langkah awal yang jelas untuk keluarga",
            "contact.admissionText": "Gunakan formulir pendaftaran untuk memberi tahu program yang diminati anak Anda. Pondok akan menerima permintaan tersebut dan menindaklanjuti proses penerimaan santri.",
            "contact.stepsTitle": "Apa yang terjadi selanjutnya?",
            "contact.step1": "Kirim permintaan",
            "contact.step1Text": "Sampaikan kontak wali, usia anak, dan program yang diminati.",
            "contact.step2": "Pondok meninjau permintaan",
            "contact.step2Text": "Informasi Anda tersimpan sebagai permintaan pendaftaran dengan akses yang terlindungi.",
            "contact.step3": "Lanjutkan bersama tim",
            "contact.step3Text": "Pihak pondok menghubungi Anda untuk menjelaskan persyaratan dan proses resmi.",
            "contact.lifeKicker": "Mengenal kehidupan pondok",
            "contact.lifeTitle": "Sekilas pembelajaran dan kebersamaan",
            "contact.lifeIntro": "Lihat kegiatan nyata di Al-Munawwarah sambil mempertimbangkan langkah berikutnya bagi keluarga Anda.",
            "contact.faqKicker": "Pertanyaan umum",
            "contact.faqTitle": "Sebelum mengirim permintaan informasi",
            "contact.faq1": "Apakah permintaan ini berarti pendaftaran selesai?",
            "contact.faq1Text": "Tidak. Ini adalah permintaan informasi awal. Tim pondok akan menjelaskan persyaratan dan langkah pendaftaran resmi.",
            "contact.faq2": "Informasi apa yang perlu diberikan?",
            "contact.faq2Text": "Sampaikan nama dan email wali, usia calon santri, serta program yang diminati. Pesan tambahan bersifat opsional.",
            "contact.faq3": "Informasi apa yang tidak boleh disertakan?",
            "contact.faq3Text": "Jangan sertakan kata sandi, detail pembayaran, atau informasi medis sensitif dalam permintaan.",
            "contact.sendInquiry": "Kirim permintaan informasi pendaftaran",
            "register.kicker": "Daftarkan Anak Anda",
            "register.title": "Mulai Langkah Pertama Pendaftaran Anak Anda",
            "register.formIntro": "Formulir ini mengirimkan permintaan informasi pendaftaran awal ke pondok. Ini belum merupakan pendaftaran resmi; tim kami akan menghubungi Anda mengenai langkah berikutnya.",
            "register.stepsTitle": "Alur permintaan pendaftaran",
            "register.step1": "1. Sampaikan informasi",
            "register.step1Text": "Berikan kontak wali dan program yang diminati anak Anda.",
            "register.step2": "2. Permintaan diterima pondok",
            "register.step2Text": "Data formulir tersimpan di basis data permintaan pendaftaran untuk ditindaklanjuti tim pondok.",
            "register.step3": "3. Lanjutkan dengan tim pondok",
            "register.step3Text": "Tim akan menghubungi Anda untuk menjelaskan persyaratan dan proses pendaftaran resmi.",
            "register.privacyNote": "Kami hanya meminta informasi yang diperlukan untuk menanggapi permintaan Anda. Jangan kirim kata sandi, detail pembayaran, atau informasi kesehatan sensitif.",
            "err.title": "Halaman Tidak Ditemukan",
            "err.text": "Halaman yang Anda cari tidak tersedia. Silakan kembali ke beranda pondok.",
            "err.home": "Kembali ke Beranda"
        }
    };

    function getLang() {
        return localStorage.getItem("am-lang") === "id" ? "id" : "en";
    }

    function getTheme() {
        return localStorage.getItem("am-theme") === "light" ? "light" : "dark";
    }

    function initScrollEffects() {
        var progress = document.createElement("div");
        progress.className = "reading-progress";
        progress.setAttribute("aria-hidden", "true");
        document.body.appendChild(progress);

        var ticking = false;
        function updateProgress() {
            var scrollable = document.documentElement.scrollHeight - window.innerHeight;
            var percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
            progress.style.transform = "scaleX(" + Math.min(100, Math.max(0, percent)) / 100 + ")";
            ticking = false;
        }

        window.addEventListener("scroll", function () {
            if (!ticking) {
                window.requestAnimationFrame(updateProgress);
                ticking = true;
            }
        }, { passive: true });
        window.addEventListener("resize", updateProgress);
        updateProgress();

        var targets = document.querySelectorAll("[data-reveal]");
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
            targets.forEach(function (target) {
                target.classList.add("is-visible");
            });
            return;
        }

        document.body.classList.add("motion-ready");
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

        targets.forEach(function (target) {
            observer.observe(target);
        });
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

        initScrollEffects();
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
