const ajout = (req, res) => {
    req.Coureur.create({
        prenom_coureur: req.body.prenom,
        nom_coureur: req.body.nom,
        dossard_coureur: req.body.dossard,
        sas_coureur: req.body.sas,
    });
    res.redirect(301, "http://localhost:1234/liste");
};
export default ajout;
