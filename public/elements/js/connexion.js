document.querySelector("form").addEventListener("submit", async (e) => {
    console.log("Le formulaire vient d'être cliquer");
    e.preventDefault();
    const valeurInput = e.target[0].value;
    console.log("Valeur de l'input : " + valeurInput);

    const donnees = {
        code: valeurInput,
    };

    const resultatRequete = await fetch("http://localhost:1234/acces", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(donnees),
    });
    const data = await resultatRequete.json();
    if (data.error == null) {
        //Alors la requete c'est bien effectuer
        if (data.connecte) {
            window.location = "http://localhost:1234/";
        } else {
            console.log("Ce n'est pas la bon code");
            //Afficher une errue dans le form
        }
    } else {
        console.error(data.error);
        console.log(data);
    }
});
