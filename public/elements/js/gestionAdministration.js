document.querySelectorAll(".boutonModifier").forEach((bouton) => {
    bouton.addEventListener("click", async (e) => {
        const divElement = e.target.parentNode.parentNode;
        document.querySelector("#divResultat").innerHTML = /*html*/ `
        <form>
            <div id="divPrenom">
                <label for="inputPrenom">Prénom :</label>
                <input id="inputPrenom" type="text" value=${divElement.children[0].lastChild.textContent.split(" ")[1]}>
            </div>
            <div id="divNom">
                <label for="inputNom">Nom :</label>
                <input id="inputNom" type="text" value=${divElement.children[1].lastChild.textContent.split(" ")[1]}>
            </div>
            <div id="divDossard">
                <label for="inputDossard">Dossard n° :</label>
                <input id="inputDossard" type="number" value=${divElement.children[2].lastChild.textContent.split(" ")[1]}>
            </div>	
            <div id="disSAS">
                <label for="inputSAS">SAS :</label>
                <input id="inputSAS" type="text" value=${divElement.children[3].lastChild.textContent.split(" ")[1]}>
                
            </div>
            <button class="bouton mt-2" type="submit">Enregistrer</button>
        </form>`;

        document.querySelector("form").addEventListener("submit", async (e) => {
            e.preventDefault();

            let form = e.target;
            const donnees = {
                id: divElement.dataset.id,
                prenom: form[0].value,
                nom: form[1].value,
                dossard: form[2].value,
                sas: form[3].value,
            };

            // Gestion de l'url
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
                    location.reload(true); //Permet de reload la page sans utiliser le cache
                } else {
                    window.location.href = "http://localhost:1234/";
                }
            } else {
                console.error("La requête a échoué avec le statut :", requete.status);
            }
        });
    });
});
document.querySelectorAll(".boutonSupprimer").forEach((bouton) => {
    bouton.addEventListener("click", async (e) => {
        const donnee = {
            id: e.target.parentNode.parentNode.dataset.id,
        };

        const requete = await fetch("http://localhost:1234/administration/suppression", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donnee),
        });

        if (requete.ok) {
            const reponse = await requete.json();

            if (reponse.suppression) {
                location.reload(true); //Permet de reload la page sans utiliser le cache
            } else {
                window.location.href = "http://localhost:1234/";
            }
        } else {
            console.error("La requête a échoué avec le statut :", requete.status);
        }
    });
});
