export const accesVisiteurs = (req, res) => {
    if (req.body.code == process.env.MDP_ACCES) {
        //Génération du cookie
        res.cookie("connecte", process.env.CHAINE_COOKIE, {
            maxAge: 1000 * 60 * 60 * 24 * 7, //Cookie dispo pendant un semaine
            httpOnly: true,
            sameSite: "strict",
            secure:true,
        });
        //Je renvoie le faite que c le bon code
        res.json({ connecte: true });
    } else {
        // je renvoie le faite que ce n'est pas la bon code
        res.json({ connecte: false });
    }
};
export const accesAdministrateur = (req, res) => {
    if (req.body.code == process.env.CODE_ADMINISTRATEUR) {
        res.cookie("administrateur", process.env.CHAINE_COOKIE_ADMINISTRATEUR, {
            maxAge: 1000 * 60 * 60 * 24 * 2,
            httpOnly: true,
            sameSite: "strict",
            secure:true,
        });
        res.json({ connecte: true });
    } else {
        res.json({ connecte: false });
    }
};