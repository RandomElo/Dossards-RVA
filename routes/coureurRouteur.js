import express from "express";
import ajout from "../controleurs/coureur.js";
const coureur = express.Router();

coureur.post("/ajout", ajout);

export default coureur;
