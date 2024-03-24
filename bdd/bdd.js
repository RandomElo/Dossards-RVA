import { Sequelize } from "sequelize";
import Coureur from "../modele/Coureur.js";
import { fakerFR as faker } from "@faker-js/faker";

//Création de l'instance Sequelize
const sequelize = new Sequelize("bdd", process.env.BDD_UTILISATEUR, process.env.BDD_MDP, {
    dialect: "sqlite",
    storage: "./bdd.sqlite",
    logging: false, //Permet d'afficher les requetes sql dasn la console
    define: {
        freezeTableName: true, //les noms des tables ne seront pas modif pour correspondre au nom de modele
        timestamps: false, //permet de désavtiver l'ajout d'horodataeg des data
    },
});

// Création de l'objet de la bdd
const bdd = {
    sequelize,
    Coureur: Coureur(sequelize),
};

await sequelize.sync({ force: true });

await bdd.Coureur.create({
    prenom_coureur: "Eloi",
    nom_coureur: "Random",
    dossard_coureur: "1234",
    sas_coureur: "3h15",
});
await bdd.Coureur.create({
    prenom_coureur: "Pépita",
    nom_coureur: "Random",
    dossard_coureur: "2345",
    sas_coureur: "4h",
});
export default bdd;
