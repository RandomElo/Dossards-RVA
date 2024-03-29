document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const valeurInput = e.target[0].value;
    const donnees = {
        code: valeurInput,
    };
    const requete = await fetch(`https://eloi2.alwaysdata.net/acces`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(donnees),
    });
    if (requete.ok) {
        const resultat = await requete.json();
        if (resultat.connecte) {
            window.location.href = `https://eloi2.alwaysdata.net/`;
        } else {
            document.querySelector('#divErreur').innerHTML = /*html*/`<p id='messageErreur'>Le code est incorrect</p>`
        }
    } else {
        console.error("La requête a échoué avec le statut :", requete.status);
    }
});
