import express from "express";
import { ajout, trieSAS } from "../controleurs/coureur.js";
const coureur = express.Router();

coureur.post("/ajout", ajout);
coureur.post('/trie-sas', trieSAS)

export default coureur;