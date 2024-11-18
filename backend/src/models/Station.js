// backend/src/models/Station.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Station = sequelize.define('Station', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  available: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Cria a tabela automaticamente
sequelize.sync();

module.exports = Station;
