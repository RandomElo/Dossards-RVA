export const administrationRedirection = (req, res) => {
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        if (req.cookies.administrateur == process.env.CHAINE_COOKIE_ADMINISTRATEUR) {
            res.redirect(301, `https://eloi2.alwaysdata.net/administration/gestion`);
        } else if (!req.cookies.administrateur) {
            res.redirect(301, `https://eloi2.alwaysdata.net/connexion`);
        }
    } else {
        res.clearCookie("connecte");
        res.redirect(301, `https://eloi2.alwaysdata.net`);
    }
};
export const administrationConnexion = (req, res) => {
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        res.render("connexion.ejs", { titre: "Administration", css: "connexionAdministration", script: "connexionAdministration", connexion: req.cookies.connecte, h1: "Page de connexion administrateur" });
    } else {
        res.redirect(301, `https://eloi2.alwaysdata.net`);
    }
};
export const administrationGestion = async (req, res) => {
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        if (req.cookies.administrateur == process.env.CHAINE_COOKIE_ADMINISTRATEUR) {
            const inscrits = await req.Coureur.findAll();
            res.render("gestionAdministrateur.ejs", { titre: "Administrateur", css: "gestionAdministrateur", connexion: req.cookies.connecte, inscrits });
        } else {
            res.clearCookie("administrateur");
            res.redirect(301, `https://eloi2.alwaysdata.net`);
        }
    } else {
        res.clearCookie("connecte");
        res.redirect(301, `https://eloi2.alwaysdata.net`);
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
                res.json({ modification: true });
            })
            .catch((error) => {
                console.error(`Erreur lors de la mise à jour de l'objet : ${error}`);
                res.json({ modification: false });
            });
    } else {
        res.clearCookie("administrateur");
        res.json({ modification: false });
    }
};
export const administrationSuppression = (req, res) => {
    if (req.cookies.administrateur == process.env.CHAINE_COOKIE_ADMINISTRATEUR) {
        req.Coureur.destroy({
            where: { id_coureur: req.body.id },
        })
            .then(() => {
                res.json({ suppression: true });
            })
            .catch((error) => {
                console.error(`Erreur lors de la suppression de l'objet : ${error}`);
                res.json({ suppression: false });
            });
    } else {
        res.clearCookie("administrateur");
        res.json({ suppression: false });
    }
};
