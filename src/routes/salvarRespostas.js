const express              = require('express');
const router               = express.Router();

var respostasController    = require('../controllers/respostasController');
 
router.post('/', respostasController.salvar);
 
router.get('/placar', respostasController.buscarPlacarGeral);
 
router.get('/usuario/:id', respostasController.buscarPorUsuario);
 
module.exports = router;