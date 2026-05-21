const perguntasModel = require('../models/perguntasModel');
 
function encontrarPerguntas(req, res) {
    var idPergunta = req.params.idPergunta;


        perguntasModel.encontrarPerguntas(idPergunta).then(function (resultado) {
            if (resultado.length > 0) {
                res.json(resultado[0]);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function encontrarRespostas(req, res) {
    var idPergunta = req.params.idPergunta;


        perguntasModel.encontrarRespostas(idPergunta).then(function (resultado) {
            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarTodasComAlternativas(req, res){
    perguntasModel.listarTodasComAlternativas().then(function (linhas){
        if(linhas.length === 0) {
            return res.status(204).send("Nenhuma pergunta encontrada")
        }

        var mapa = {};
        linhas.forEach(function (linha) {
            if(!mapa[linha.idPergunta]) {
                mapa[linha.idPergunta] = {
                    idPergunta: linha.idPergunta,
                    enunciado: linha.enunciado,
                    opts: []
                };
            }
            mapa[linha.idPergunta].opts.push({
                idAlternativa: linha.idAlternativa,
                texto: linha.texto,
                correta: linha.correta
            });
            });

            res.json(Object.values(mapa));
    
        }).catch(function (erro){
            console.log("Erro ao listar perguntas:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}
 
module.exports = {
    encontrarPerguntas,
    encontrarRespostas,
    listarTodasComAlternativas
};
 