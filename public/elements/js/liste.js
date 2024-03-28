document.querySelectorAll(".copierDossard").forEach((bouton) => {
    bouton.addEventListener("click", async (e) => {
        let numeroDossard = e.target.dataset.dossard;
        await navigator.clipboard.writeText(numeroDossard);
    });
});
function afficherTrie() {
    boutonTrie.id = "boutonMasquerTrieSAS";
    boutonTrie.innerHTML = "Masquer";

    document.querySelector("#divTrieSAS").innerHTML = /*html*/ `
    <a class="bouton boutonSAS" data-sas="3 h 15">Afficher SAS : 3 h 15</a>
    <a class="bouton boutonSAS" data-sas="3 h 30">Afficher SAS : 3 h 30</a>
    <a class="bouton boutonSAS" data-sas="3 h 45">Afficher SAS : 3 h 45</a>
    <a class="bouton boutonSAS" data-sas="4 h">Afficher SAS : 4 h 00</a>
    <a class="bouton boutonSAS" data-sas="4 h 15">Afficher SAS : 4 h 15</a>
    <a class="bouton boutonSAS" data-sas="4 h 30">Afficher SAS : 4 h 30</a>
    `;

    //Gérer sur le clique des boutons SAS
    document.querySelectorAll(".boutonSAS").forEach((bouton) => {
        bouton.addEventListener("click", async (e) => {
            const donnee = {
                sas: e.target.dataset.sas,
            };
            const requete = await fetch(`https://eloi2.alwaysdata.net/coureur/trie-sas`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(donnee),
            });
            if (requete.ok) {
                const reponse = await requete.json();
                if (reponse.achever) {
                    let conteneurDivInscrit = "";
                    //Création et gestion du bouton pour supprimer le filtre
                    conteneurDivInscrit += /*html*/ `<a id="supprimerFiltre" class="bouton">Supprimer le filtre</a>`;
                    reponse.coureurs.forEach((coureur) => {
                        conteneurDivInscrit += /*html*/ `
                        <div class="coureur mt-3 mb-2 p-3 border border-dark">
                            <p><span class="gras">Prénom :</span> ${coureur.prenom_coureur}</p>
                            <p><span class="gras">Nom :</span> ${coureur.nom_coureur}</p>
                            <p><span class="gras">Dossard n° :</span> ${coureur.dossard_coureur}</p>
                            <p ><span class="gras">SAS :</span> ${coureur.sas_coureur}</p>
                            <a class="bouton copierDossard" data-dossard=${coureur.id_coureur}>Copier le numéro de dossard</a>
                        </div>
                        `;
                    });
                    document.querySelector("#listeInscrits").innerHTML = conteneurDivInscrit;
                    document.querySelector("#supprimerFiltre").addEventListener("click", () => location.reload(true));
                } else {
                    console.error(`Une erreur est survenue`);
                }
            } else {
                console.error("La requête a échoué avec le statut :", requete.status);
            }
        });
    });
    //Fin de la gestion des clique sur les boutons SAS

    boutonTrie.removeEventListener("click", afficherTrie);
    boutonTrie.addEventListener("click", masquerTrie);
}
function masquerTrie() {
    boutonTrie.id = "boutonTrieSAS";
    boutonTrie.innerHTML = "Trier par SAS";
    document.querySelector("#divTrieSAS").innerHTML = "";

    boutonTrie.removeEventListener("click", masquerTrie);
    boutonTrie.addEventListener("click", afficherTrie);
}
let boutonTrie = document.querySelector(".boutonTrie");
boutonTrie.addEventListener("click", afficherTrie);
