// backend/src/routes/stationRoutes.js
const express = require('express');
const router = express.Router();
const stationController = require('../controllers/stationController');

const authenticate = require('../middleware/authMiddleware');

router.use(authenticate); // Protege todas as rotas de estação
// Endpoints das estações
router.get('/', stationController.getStations);
router.post('/', stationController.createStation);
router.get('/:id', stationController.getStationById);
router.put('/:id', stationController.updateStation);
router.delete('/:id', stationController.deleteStation);
router.patch('/:id/status', stationController.updateStatus);

module.exports = router;
