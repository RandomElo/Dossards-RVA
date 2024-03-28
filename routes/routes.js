import express from "express";
import path from "path";
import coureur from "./coureurRouteur.js";
import administration from "./administrationRouteur.js";
import { accesVisiteurs, accesAdministrateur } from "../controleurs/acces.js";

const routeur = express.Router();

routeur.get("/", async (req, res) => {
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        console.log(req.cookies.connecte);
        console.log(process.env.CHAINE_COOKIE);
        res.render("accueil.ejs", { titre: "Accueil", css: "accueil", connexion: req.cookies.connecte });
    } else {
        res.render("connexion.ejs", { titre: "Connexion", css: "", script: "connexion", connexion: req.cookies.connecte, h1: "Bienvenue sur la page de connexion" });
    }
});
routeur.get("/liste", async (req, res) => {
    if (req.cookies.connecte == process.env.CHAINE_COOKIE) {
        const inscrits = await req.Coureur.findAll();
        res.render("liste.ejs", { titre: "Liste inscrits", inscrits, css: "liste", connexion: req.cookies.connecte });
    } else {
        res.redirect(301, `https://eloi2.alwaysdata.net`);
    }
});
routeur.get("/ajout", (req, res) => {
    res.render("ajout.ejs", { titre: "Ajoutez un participant", css: "ajout", connexion: req.cookies.connecte });
});
routeur.get("/robots.txt", (req, res) => {
    res.sendFile(path.join("C:", "Users", "eloir", "Documents", "Programmation", "__Projets", "Dossards RVA", "robots.txt"));
});
//Prévoir un routeur
routeur.use("/acces", accesVisiteurs);
routeur.use("/acces-administrateur", accesAdministrateur);

routeur.use("/coureur", coureur);
routeur.use("/administration", administration);

export default routeur;
