var express = require("express");
var router = express.Router();

var perguntasController = require("../controllers/perguntasController");

router.get("/listarPerguntas/:idPergunta", function (req, res) {
    perguntasController.encontrarPerguntas(req, res);
});

router.get("/listarRespostas/:idPergunta", function (req, res) {
    perguntasController.encontrarRespostas(req, res);
});

router.get("/listarTodas", function (req, res){
    perguntasController.listarTodasComAlternativas(req,res);
})
  
module.exports = router;