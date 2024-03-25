import express from "express";
import { administrationConnexion, administrationModification } from "../controleurs/administration.js";

const administration = express.Router();

administration.get("/connexion", administrationConnexion);
administration.get("/tableau", administrationModification);

export default administration;
