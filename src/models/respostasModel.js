var database = require("../database/config")
 
const RespostaModel = {
 
    async salvar({ fkUsuario, fkPergunta, fkAlternativa, acerto }) {
        var instrucaoSql = `
            INSERT INTO respostas (fkUsuario, fkPergunta, fkAlternativa, acerto)
            VALUES (${fkUsuario}, ${fkPergunta}, ${fkAlternativa}, ${acerto ? 1 : 0})
        `; 
        return database.executar(instrucaoSql);
    },
 
    async buscarPorUsuario(fkUsuario) {
        var instrucaoSql = `
        SELECT acerto
        FROM respostas
        WHERE fkUsuario = ${fkUsuario}
        `;
        return database.executar(instrucaoSql);
    }

 
};
 
module.exports = RespostaModel;
 