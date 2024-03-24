document.querySelectorAll(".bouton").forEach((bouton) => {
    bouton.addEventListener("click", async (e) => {
        let numeroDossard = e.target.dataset.dossard;
        console.log(numeroDossard);
        await navigator.clipboard.writeText(numeroDossard);
    });
});
