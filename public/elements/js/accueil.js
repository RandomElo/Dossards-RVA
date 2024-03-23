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
    console.log(data);
});
