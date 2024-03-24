import { DataTypes } from "sequelize";

export default function (bdd) {
    const Coureur = bdd.define("Coureurs", {
        id_coureur: {
            type: DataTypes.INTEGER(),
            autoIncrement: true,
            primaryKey: true,
        },
        prenom_coureur: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        nom_coureur: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        dossard_coureur: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true,
        },
        sas_coureur: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
    });
    return Coureur;
}
