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
///SAS 3h15
await bdd.Coureur.create({
    prenom_coureur: "Eloi",
    nom_coureur: "Random",
    dossard_coureur: "1111",
    sas_coureur: "3 h 15",
});
await bdd.Coureur.create({
    prenom_coureur: "Eloi",
    nom_coureur: "Random",
    dossard_coureur: "1222",
    sas_coureur: "3 h 15",
});
await bdd.Coureur.create({
    prenom_coureur: "Eloi",
    nom_coureur: "Random",
    dossard_coureur: "1333",
    sas_coureur: "3 h 15",
});
//Fin de la génération 3h15
await bdd.Coureur.create({
    prenom_coureur: "Eloi",
    nom_coureur: "Random",
    dossard_coureur: "2222",
    sas_coureur: "3 h 30",
});
await bdd.Coureur.create({
    prenom_coureur: "Eloi",
    nom_coureur: "Random",
    dossard_coureur: "3333",
    sas_coureur: "3 h 45",
});
await bdd.Coureur.create({
    prenom_coureur: "Eloi",
    nom_coureur: "Random",
    dossard_coureur: "4444",
    sas_coureur: "4 h",
});
await bdd.Coureur.create({
    prenom_coureur: "Eloi",
    nom_coureur: "Random",
    dossard_coureur: "5555",
    sas_coureur: "4 h 15",
});
await bdd.Coureur.create({
    prenom_coureur: "Eloi",
    nom_coureur: "Random",
    dossard_coureur: "6666",
    sas_coureur: "4 h 30",
});
export default bdd;
