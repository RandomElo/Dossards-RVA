document.querySelectorAll(".boutonModifier").forEach((bouton) => {
    bouton.addEventListener("click", async (e) => {
        const divElement = e.target.parentNode.parentNode;
        let donnees = {
            id: divElement.dataset.id,
            prenom: divElement.children[0].lastChild.textContent.split(" ")[1],
            nom: divElement.children[1].lastChild.textContent.split(" ")[1],
            dossard: divElement.children[2].lastChild.textContent.split(" ")[1],
            sas: divElement.children[3].lastChild.textContent.split(" ")[1],
        };
        if (confirm("Voulez vous modifier le prénom ?")) {
            donnees.prenom = prompt("Remplacer par quelle valeur ?");
        }
        if (confirm("Voulez vous modifier le nom ?")) {
            donnees.nom = prompt("Remplacer par quelle valeur ?");
        }
        if (confirm("Voulez vous modifier le dossard ?")) {
            donnees.dossard = prompt("Remplacer par quelle valeur ?");
        }
        if (confirm("Voulez vous modifier le sas ?")) {
            donnees.sas = prompt("Remplacer par quelle valeur ?");
        }
        console.log(donnees);

        const requete = await fetch("http://localhost:1234/administration/modification", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donnees),
        });
        if (requete.ok) {
            const reponse = await requete.json();
            if (reponse.modification) {
                console.log("Modification enregistrer avec succès");
            } else {
                console.log("Une erreur à étais détécter");
            }
        } else {
            console.error("La requête a échoué avec le statut :", requete.status);
        }
    });
});
document.querySelectorAll(".boutonSupprimer").forEach((bouton) => {
    bouton.addEventListener("click", async (e) => {
        const donnee = {
            id: e.target.parentNode.parentNode.dataset.id,
        };
        console.log(donnee)
        const requete = await fetch("http://localhost:1234/administration/suppression", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donnee),
        });
        if (requete.ok) {
            const reponse = await requete.json();
            console.log(reponse);
        } else {
            console.error("La requête a échoué avec le statut :", requete.status);
        }
    });
});
