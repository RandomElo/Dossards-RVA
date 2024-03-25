export const administrationConnexion = (req, res) => {
    console.log("Bienvenue sur la page de connexion de l'administration");
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        res.render("connexion.ejs", { titre: "Administration", css: "connexionAdministration", script: "connexionAdministration", connexion: req.cookies.connecte, h1: "Page de connexion administrateur" });
    } else {
        console.log("Tu est rediriger");
        res.redirect(301, "http://localhost:1234/");
    }
};
export const administrationModification = (req, res) => {
    res.send("Administration tableau");
};
