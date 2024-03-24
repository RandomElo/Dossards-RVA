import jwt from "jsonwebtoken";
const acces = (req, res) => {
    const codeAcces = req.body.code;
    if (codeAcces == process.env.MDP_ACCES) {
        console.log("C'est le bon code");
        //Génération du cookie
        res.cookie("connecte", process.env.CHAINE_COOKIE, {
            maxAge: 1000 * 60 * 60 * 24 * 7, //Cookie dispo pendant un semaine
            httpOnly: true,
            sameSite: "strict",
            // secure:true, A utiliser quand je serias sur le site finale
        });
        //Je renvoie le faite que c le bon code
        res.json({ connecte: true });
    } else {
        // je renvoie le faite que ce n'est pas la bon code
        res.json({ connecte: false });
    }
};
export default acces;
