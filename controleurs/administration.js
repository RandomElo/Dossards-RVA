export const administrationRedirection = (req, res) => {
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        console.log("Le cookie de connexion est correct");
        if (req.cookies.administrateur == process.env.CHAINE_COOKIE_ADMINISTRATEUR) {
            console.log("Redirection en cour");
            res.redirect(301, "http://localhost:1234/administration/gestion");
        } else if (!req.cookies.administrateur) {
            console.log("Redirection en cour");
            res.redirect(301, "http://localhost:1234/administration/connexion");
            console.log("Le cookie administrateur est inexistant");
        }
    } else {
        console.log("Le cookie de connexion est incorrect");
        res.clearCookie("connecte");
        console.log("Redirection en cour");
        res.redirect(301, "http://localhost:1234");
    }
};
export const administrationConnexion = (req, res) => {
    console.log("Bienvenue sur la page de connexion de l'administration");
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        console.log("ton cookie est correct");
        res.render("connexion.ejs", { titre: "Administration", css: "connexionAdministration", script: "connexionAdministration", connexion: req.cookies.connecte, h1: "Page de connexion administrateur" });
    } else {
        console.log("Tu est rediriger");
        res.redirect(301, "http://localhost:1234/");
    }
};
export const administrationGestion = async (req, res) => {
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        if (req.cookies.administrateur == process.env.CHAINE_COOKIE_ADMINISTRATEUR) {
            console.log("Le cookie d'administateur est correct");
            const inscrits = await req.Coureur.findAll();
            res.render("gestionAdministrateur.ejs", { titre: "Administrateur", css: "gestionAdministrateur", connexion: req.cookies.connecte, inscrits });
        } else {
            res.clearCookie("administrateur");
            res.redirect(301, "http://localhost:1234");
        }
    } else {
        res.clearCookie("connecte");
        res.redirect(301, "http://localhost:1234");
    }
};
export const administrationModification = (req, res) => {
    if (req.cookies.administrateur == process.env.CHAINE_COOKIE_ADMINISTRATEUR) {
        req.Coureur.update(
            {
                prenom_coureur: req.body.prenom,
                nom_coureur: req.body.nom,
                dossard_coureur: req.body.dossard,
                sas_coureur: req.body.sas,
            },
            {
                where: { id_coureur: req.body.id },
            }
        )
            .then(() => {
                console.log("Mise à jour effectuer");
                res.json({ modification: true });
            })
            .catch((error) => {
                console.error(`Erreur lors de la mise à jour de l'objet : ${error}`);
                res.json({ modification: false });
            });
    } else {
        res.json({ modification: false });
    }
};
export const administrationSuppression = (req, res) => {
    console.log(req.body.id);
    res.json("Ceci est un test");
};
