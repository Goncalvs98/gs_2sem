// backend/src/config/sequelize.js
const { Sequelize } = require('sequelize');

// Conecta ao SQLite usando Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // Arquivo do banco de dados
});

sequelize
  .authenticate()
  .then(() => console.log('Conectado ao SQLite com Sequelize'))
  .catch((err) => console.error('Erro ao conectar:', err));

module.exports = sequelize;
