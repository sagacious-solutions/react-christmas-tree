const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.REACT_APP_DB_URL);

const modelDefiners = [require("./models/favoriteColor.model")];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

const connectToDb = (url) => {
    const db = new Sequelize(url);
    db.authenticate()
        .then(() => {
            console.log("Database Connection Failed");
            return db;
        })
        .catch(() => {
            console.log("Database Connection Failed");
            return null;
        });
};

export { connectToDb };
// function applyExtraSetup(sequelize) {
//     const { instrument, orchestra } = sequelize.models;

//     orchestra.hasMany(instrument);
//     instrument.belongsTo(orchestra);
// }

// We execute any extra setup after the models are defined, such as adding associations.
// applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
