// backend/server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRotes'); // Importe as rotas de autenticação

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Middleware para interpretar JSON

// Registre as rotas
app.use('/api/auth', authRoutes);

const stationRoutes = require('./src/routes/stationRoutes');
app.use('/api/stations', stationRoutes);

const sequelize = require('./src/config/sequelize');
sequelize.sync({ force: false }); // Evite usar force=true em produção
sequelize.sync().then(() => console.log('Tabelas sincronizadas'));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
