// backend/src/routes/stationRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Lista todas as estações
router.get('/', (req, res) => {
  db.all('SELECT * FROM stations', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Adiciona uma nova estação
router.post('/', (req, res) => {
  const { location, status, capacity, available } = req.body;
  const query = `
    INSERT INTO stations (location, status, capacity, available)
    VALUES (?, ?, ?, ?)
  `;
  db.run(query, [location, status, capacity, available], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: this.lastID });
    }
  });
});

// Atualiza uma estação
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { location, status, capacity, available } = req.body;
  const query = `
    UPDATE stations
    SET location = ?, status = ?, capacity = ?, available = ?
    WHERE id = ?
  `;
  db.run(query, [location, status, capacity, available, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Estação atualizada com sucesso' });
    }
  });
});

// Deleta uma estação
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM stations WHERE id = ?`;
  db.run(query, [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Estação deletada com sucesso' });
    }
  });
});

module.exports = router;
