const express = require('express');
const router = express.Router();
const productoController = require('../controllers/frutascontroller');

router.post('/', productoController.postfrutas);
router.get('/', productoController.getfrutas);
router.get('/:id', productoController.getfruta);
router.put('/:id', productoController.putfruta);
router.delete('/:id', productoController.deletefruta);

module.exports = router;
