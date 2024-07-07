const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Type = sequelize.define('Type', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Type;
