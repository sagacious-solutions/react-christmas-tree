const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("color", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        hex: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        rgb: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    });
};
