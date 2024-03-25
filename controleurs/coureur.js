export const ajout = (req, res) => {
    console.log("Je vient de rentrer dasn le middlewares");
    console.log(req.body.prenom);

    req.Coureur.create({
        prenom_coureur:req.body.prenom,
        nom_coureur:req.body.nom,
        dossard_coureur:req.body.dossard,
        sas_coureur:req.body.sas,
    })

    res.json({ texte: "test" });
};
export const modification = (req, res) => {
    res.send("Je suis la modification");
};

export const suppression = (req, res) => {
    res.send("Je suis la suppression");
};
