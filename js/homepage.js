(function () {
    "use strict";

    var counters = document.querySelectorAll(".home-metric-card [data-count]");
    if (!counters.length) {
        return;
    }

    function setFinalValue(counter) {
        var target = Number(counter.getAttribute("data-count"));
        var digits = Number(counter.getAttribute("data-pad")) || 0;
        counter.textContent = new Intl.NumberFormat(document.documentElement.lang || "en").format(target).padStart(digits, "0");
    }

    function animateCounter(counter) {
        var target = Number(counter.getAttribute("data-count"));
        var digits = Number(counter.getAttribute("data-pad")) || 0;
        var duration = 1250;
        var startTime;
        counter.textContent = new Intl.NumberFormat(document.documentElement.lang || "en").format(0).padStart(digits, "0");

        function step(timestamp) {
            if (startTime === undefined) {
                startTime = timestamp;
            }
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var easedProgress = 1 - Math.pow(1 - progress, 4);
            var value = Math.round(target * easedProgress);
            counter.textContent = new Intl.NumberFormat(document.documentElement.lang || "en").format(value).padStart(digits, "0");
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
        counters.forEach(setFinalValue);
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.remove("is-pending");
            entry.target.classList.add("is-visible");
            entry.target.querySelectorAll("[data-count]").forEach(animateCounter);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.28 });

    document.querySelectorAll(".home-metric-card").forEach(function (card) {
        card.classList.add("is-pending");
        observer.observe(card);
    });
})();
