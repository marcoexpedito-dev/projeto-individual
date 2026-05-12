var database = require("../database/config");

function buscarAquariosPorEmpresa(id) {

  var instrucaoSql = `SELECT * FROM usuario a WHERE id = ${id}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(id, nome, email, senha) {
  
  var instrucaoSql = `INSERT INTO (id, nome, email, senha) usuario VALUES (${id}, ${nome}, ${email}, ${senha})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
