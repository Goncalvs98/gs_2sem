// // backend/src/config/db.js
// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// // Cria (ou conecta) ao banco de dados SQLite
// const dbPath = path.resolve(__dirname, 'database.sqlite');
// const db = new sqlite3.Database(dbPath, (err) => {
//   if (err) {
//     console.error('Erro ao conectar ao SQLite:', err.message);
//   } else {
//     console.log('Conectado ao banco SQLite.');
//   }
// });

// // Criação das tabelas
// db.serialize(() => {
//   // Cria a tabela 'stations'
//   db.run(`
//     CREATE TABLE IF NOT EXISTS stations (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       location TEXT NOT NULL,
//       status TEXT NOT NULL,
//       capacity INTEGER NOT NULL,
//       available INTEGER NOT NULL
//     );
//   `, (err) => {
//     if (err) {
//       console.error('Erro ao criar tabela stations:', err.message);
//     } else {
//       console.log('Tabela stations criada ou já existe.');
//     }
//   });

//   // Cria a tabela 'users'
//   db.run(`
//     CREATE TABLE IF NOT EXISTS users (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       username TEXT UNIQUE NOT NULL,
//       password TEXT NOT NULL
//     );
//   `, (err) => {
//     if (err) {
//       console.error('Erro ao criar tabela users:', err.message);
//     } else {
//       console.log('Tabela users criada ou já existe.');
//     }
//   });
// });

// const bcrypt = require('bcrypt');

// // Criação do usuário admin
// const createAdminUser = async () => {
//   const adminUsername = 'admin';
//   const adminPassword = 'admin123'; // Use uma senha forte em produção
//   const hashedPassword = await bcrypt.hash(adminPassword, 10);

//   db.run(
//     `INSERT INTO users (username, password) VALUES (?, ?)`,
//     [adminUsername, hashedPassword],
//     (err) => {
//       if (err) {
//         if (err.message.includes('UNIQUE constraint failed')) {
//           console.log('Usuário admin já existe.');
//         } else {
//           console.error('Erro ao criar usuário admin:', err.message);
//         }
//       } else {
//         console.log('Usuário admin criado com sucesso!');
//       }
//     }
//   );
// };

// module.exports = db;
