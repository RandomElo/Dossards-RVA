document.querySelectorAll(".copierDossard").forEach((bouton) => {
    bouton.addEventListener("click", async (e) => {
        let numeroDossard = e.target.dataset.dossard;
        await navigator.clipboard.writeText(numeroDossard);
    });
});
