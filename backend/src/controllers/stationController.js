// backend/src/controllers/stationController.js
const Station = require('../models/Station');

exports.getStationById = async (req, res) => {
    try {
      const { id } = req.params;
      const station = await Station.findByPk(id); // Busca pelo ID primário
  
      if (!station) {
        return res.status(404).json({ error: 'Estação não encontrada' });
      }
  
      res.json(station);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};  

exports.getStations = async (req, res) => {
    try {
      const stations = await Station.findAll();
      res.json(stations || []); // Retorna um array vazio caso não haja estações
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
const { body, validationResult } = require('express-validator');

// Validação no middleware
const validateStation = [
  body('location').notEmpty().withMessage('Localização é obrigatória'),
  body('capacity').isInt({ min: 1 }).withMessage('Capacidade deve ser um número inteiro maior que zero'),
  body('available').isInt({ min: 0 }).withMessage('Disponibilidade deve ser um número inteiro não-negativo'),
];

// Atualize o endpoint de criação para usar validação
exports.createStation = [
  ...validateStation,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const station = await Station.create(req.body);
      res.status(201).json(station);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];

exports.updateStation = async (req, res) => {
  try {
    const { id } = req.params;
    await Station.update(req.body, { where: { id } });
    res.json({ message: 'Estação atualizada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteStation =  async (req, res) => {
  try {
    const { id } = req.params;
    await Station.destroy({ where: { id } });
    res.json({ message: 'Estação deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const station = await Station.findByPk(id);
    if (!station) {
      return res.status(404).json({ error: 'Estação não encontrada' });
    }

    station.status = status;
    await station.save();

    res.json({ message: 'Status atualizado com sucesso', station });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
