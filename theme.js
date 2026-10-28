// Loaded in <head> so the saved theme applies before the page paints.
(function () {
    var themes = ["auto", "light", "dark"];
    var labels = { auto: "Auto", light: "Light", dark: "Dark" };
    var saved = "auto";
    try { saved = localStorage.getItem("theme") || "auto"; } catch (e) {}

    function apply(theme) {
        if (theme === "auto") document.documentElement.removeAttribute("data-theme");
        else document.documentElement.setAttribute("data-theme", theme);
        var button = document.querySelector(".theme-toggle");
        if (button) {
            button.textContent = labels[theme];
            button.setAttribute("aria-label", "Appearance: " + labels[theme] + ". Tap to change.");
        }
    }

    apply(saved);
    document.addEventListener("DOMContentLoaded", function () {
        var button = document.querySelector(".theme-toggle");
        apply(saved);
        button.addEventListener("click", function () {
            saved = themes[(themes.indexOf(saved) + 1) % themes.length];
            try { localStorage.setItem("theme", saved); } catch (e) {}
            apply(saved);
        });
    });
})();
