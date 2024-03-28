document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    valeur = e.target[0].value;

    const donnee = {
        code: valeur,
    };

    const requete = await fetch(`https://eloi2.alwaysdata.net/acces-administrateur`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(donnee),
    });
    if (requete.ok) {
        const reponse = await requete.json();

        if (reponse.connecte) {
            window.location.href = `https://eloi2.alwaysdata.net/administration/gestion`;
        } else {
            window.location.href = `https://eloi2.alwaysdata.net`;
        }
    } else {
        console.error("La requête a échoué avec le statut :", requete.status);
    }
});
