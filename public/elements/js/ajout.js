document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let form = e.target;

    const donnees = {
        prenom: form[0].value,
        nom: form[1].value,
        dossard: form[2].value,
        sas: form[3].value,
    };
    console.log(donnees);
    const requete = await fetch("http://localhost:1234/coureur/ajout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(donnees),
    });

    if (requete.ok) {
        const data = await requete.json();
        console.log(data.texte);
    } else {
        console.error("La requête a échoué avec le statut :", requete.status);
    }
});