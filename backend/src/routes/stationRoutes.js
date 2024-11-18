// backend/src/routes/stationRoutes.js
const express = require('express');
const router = express.Router();
const Station = require('../models/Station');

// Lista todas as estações
router.get('/', async (req, res) => {
  try {
    const stations = await Station.findAll();
    res.json(stations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Adiciona uma nova estação
router.post('/', async (req, res) => {
  try {
    const station = await Station.create(req.body);
    res.status(201).json(station);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualiza uma estação
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Station.update(req.body, { where: { id } });
    res.json({ message: 'Estação atualizada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Deleta uma estação
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Station.destroy({ where: { id } });
    res.json({ message: 'Estação deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
