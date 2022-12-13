import { DataTypes } from "sequelize";

module.exports = (sequelize) => {
    sequelize.define("device", {
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
        description: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        color_mode: {
            allowNull: false,
            type: DataTypes.STRING(3),
        },
        ip_address: {
            allowNull: false,
            type: DataTypes.STRING(16),
        },
    });
};
