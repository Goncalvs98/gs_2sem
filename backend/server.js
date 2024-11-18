const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./src/config/sequelize'); // Conexão com o banco de dados usando Sequelize
const stationRoutes = require('./src/routes/stationRoutes'); // Rotas de estações

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/stations', stationRoutes); // Rotas para estações
// Exemplo de rotas adicionais
// app.use('/api/auth', require('./routes/authRoutes'));

// Testa a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco de dados SQLite bem-sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao banco:', err));

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
