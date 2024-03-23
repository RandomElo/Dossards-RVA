import express from "express";
import coureur from "./coureurRouteur.js";
import  acces  from "../controleurs/acces.js";
const routeur = express.Router();
routeur.get("/", (req, res) => {
    res.render("accueil.ejs", { titre: "Accueil" });
});
routeur.use('/acces',acces)
routeur.use("/coureur", coureur)
export default routeur;