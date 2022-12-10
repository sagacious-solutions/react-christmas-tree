const { Sequelize } = require("sequelize");

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
    dialect: "postgres",
    storage: "sqlite-example-database/example-db.sqlite",
    logQueryParameters: true,
    benchmark: true,
});

const modelDefiners = [require("./models/favoriteColor.model")];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

// function applyExtraSetup(sequelize) {
//     const { instrument, orchestra } = sequelize.models;

//     orchestra.hasMany(instrument);
//     instrument.belongsTo(orchestra);
// }

// We execute any extra setup after the models are defined, such as adding associations.
// applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
