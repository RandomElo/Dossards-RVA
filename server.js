import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import bdd from "./bdd/bdd.js";
import routeur from "./routes/routes.js";

import { accesibiliteBDD } from "./middleware/accesibiliteBDD.js";

dotenv.config();

const port = 1234;
const app = express();

//Définition du CORS
app.use(
    cors({
        origin: "*", //Toutes les origines sont au
        options: "GET,POST,PATCH,PUT,DELETE", //Les méthodes autorisées
        allowedHeaders: "Content-type,Autorization", //Les en-têtes autorisé
        credentials: true, //Les informations d'authorisation doivent être envoyées lors de la demande de cross origini
    })
);
app.use(express.json()); //Permet de récuéprer les données présentes dans les requêtes
app.use("/public", express.static(path.join(process.cwd(), "public/elements"))); //Permet de servir à l'adress /public les données présentes dasn /public/élement
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(accesibiliteBDD(bdd));
app.use("/", routeur);

//Route qui est appeller si al requete 'nest pas définis par l'appli
app.all("*", (req, res) => {
    //Utiliser une vue
    res.status(404).send("Ressource inexistante");
});

//Middkeware d'erreur globale
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Erreur Serveur");
});

app.listen(port, () => console.log("Serveur démarré => port " + port));
