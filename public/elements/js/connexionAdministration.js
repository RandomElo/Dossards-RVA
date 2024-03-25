document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    valeur = e.target[0].value;

    const donnee = {
        code: valeur,
    };

    const requete = await fetch("http://localhost:1234/acces-administrateur", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(donnee),
    });
    if (requete.ok) {
        const reponse = await requete.json();
        
        if (reponse.connecte) {
            console.log("C'est le bon code");
        } else {
            window.location = "http://localhost:1234";
        }
    } else {
        console.error("La requête a échoué avec le statut :", requete.status);
    }
});
