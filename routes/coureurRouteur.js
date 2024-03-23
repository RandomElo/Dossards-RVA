import express from "express";
import { ajout, modification, suppression } from "../controleurs/coureur.js";
const coureur = express.Router();

coureur.get("/ajout", ajout);

export default coureur;