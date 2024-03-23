const acces = (req, res) => {
    const codeAcces = req.body.code
    if(codeAcces ==process.env.MDP_ACCES ) {
        console.log("C'est le bon code")
        //Gérer les cookies
        //renvoyer la vue de la page tableau
        res.json("C'est le bon code")
    }else {
        res.json("ce n'est pas le bon code")
    }
}
export default acces