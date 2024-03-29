document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let form = e.target;

    const donnees = {
        prenom: form[0].value,
        nom: form[1].value.toUpperCase(),
        dossard: form[2].value,
        sas: form[3].value,
    };
    if (form[0].value == "" || form[1].value == "" || form[2].value == "" || form[3].value == "") {
        console.log("Un des éléments est vide");
        document.querySelector('#divMessageErreur').innerHTML = /*html*/`<p id="messageErreur" class='m-0'>Merci de remplir correctement tous les champs</p>`
    } else {
        const requete = await fetch(`https://eloi2.alwaysdata.net/coureur/ajout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donnees),
        });

        if (requete.ok) {
            window.location = `https://eloi2.alwaysdata.net/liste`;
        } else {
            console.error("La requête a échoué avec le statut :", requete.status);
        }
    }
});
