import express from "express";
import coureur from "./coureurRouteur.js";
import administration from "./administrationRouteur.js";
import { accesVisiteurs, accesAdministrateur } from "../controleurs/acces.js";

const routeur = express.Router();

routeur.get("/", async (req, res) => {
    // console.log(await req.Coureur.findAll());
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        res.render("accueil.ejs", { titre: "Accueil", css: "accueil", connexion: req.cookies.connecte });
    } else {
        res.render("connexion.ejs", { titre: "Connexion", css: "", script: "connexion", connexion: req.cookies.connecte, h1: "Bienvenure sur la page de connexion" });
    }
});
routeur.get("/liste", async (req, res) => {
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        const inscrits = await req.Coureur.findAll();
        res.render("liste.ejs", { titre: "Liste inscrits", inscrits, css: "liste", connexion: req.cookies.connecte });
    } else {
        res.redirect(301, "http://localhost:1234/");
    }
});
routeur.get("/ajout", (req, res) => {
    res.render("ajout.ejs", { titre: "Ajoutez un participant", css: "ajout", connexion: req.cookies.connecte });
});

//Prévoir un routeur
routeur.use("/acces", accesVisiteurs);
routeur.use("/acces-administrateur", accesAdministrateur);

routeur.use("/coureur", coureur);
routeur.use("/administration", administration);

export default routeur;
