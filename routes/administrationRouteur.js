import express from "express";
import { administrationRedirection, administrationConnexion, administrationGestion, administrationModification, administrationSuppression } from "../controleurs/administration.js";

const administration = express.Router();
administration.get("/", administrationRedirection);
administration.get("/connexion", administrationConnexion);
administration.get("/gestion", administrationGestion);
administration.put("/modification", administrationModification);
administration.delete("/suppression", administrationSuppression);

export default administration;
