document.addEventListener("DOMContentLoaded", () => {
    const utilisationDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
    const favicon = document.querySelector('link[rel="icon"]');

    if (utilisationDark) {
        favicon.href = "/public/img/favicon-light.ico";
    } else {
        favicon.href = "/public/img/favicon-dark.ico";
    }
});
