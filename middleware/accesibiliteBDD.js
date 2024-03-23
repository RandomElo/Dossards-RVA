//Middleware qui permet d'accèder à partir des requêtes à la bdd

export const accesibiliteBDD = (bdd) => {
    return (req, res, next) => {
        const { sequelize, Coureur } = bdd;

        req.Sequelize = sequelize;
        req.Coureur = Coureur;

        next();
    };
};
