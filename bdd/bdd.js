import { Sequelize } from "sequelize";
import Coureur from "../modele/Coureur.js";

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

export default bdd;
