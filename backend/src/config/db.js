// backend/src/config/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Cria (ou conecta) ao banco de dados SQLite
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao SQLite:', err.message);
  } else {
    console.log('Conectado ao banco SQLite.');
  }
});

// Exemplo de criação de tabela
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS stations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      location TEXT NOT NULL,
      status TEXT NOT NULL,
      capacity INTEGER NOT NULL,
      available INTEGER NOT NULL
    )
  `);
});

module.exports = db;
