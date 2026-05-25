var database = require("../database/config")

function encontrarPerguntas(idPergunta) {

    var instrucaoSql = `SELECT enunciado FROM perguntas WHERE idPergunta = ${idPergunta};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function encontrarRespostas(idPergunta) {

    var instrucaoSql = `SELECT texto, correta FROM alternativas WHERE fkPergunta = ${idPergunta};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarTodasComAlternativas() {
    var instrucaoSql = `
        SELECT 
            p.idPergunta,
            p.enunciado,
            p.explicacao,
            a.idAlternativa,
            a.texto,
            a.correta
        FROM perguntas p
        JOIN alternativas a ON a.fkPergunta = p.idPergunta
        ORDER BY p.idPergunta, a.idAlternativa;
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}
 
module.exports = {
    encontrarPerguntas,
    encontrarRespostas,
    listarTodasComAlternativas
};
 

