const RespostaModel = require('../models/respostasModel');
 
const RespostaController = {
 
    async salvar(req, res) {
        const { fkUsuario, fkPergunta, fkAlternativa, acerto } = req.body;
 
        if (!fkUsuario || !fkPergunta || !fkAlternativa || acerto === undefined) {
            return res.status(400).json({ erro: 'Dados incompletos.' });
        }
 
        try {
            const idResposta = await RespostaModel.salvar({
                fkUsuario,
                fkPergunta,
                fkAlternativa,
                acerto
            });
 
            res.status(201).json({ sucesso: true, idResposta });
 
        } catch (err) {
            console.error('Erro ao salvar resposta:', err);
            res.status(500).json({ erro: 'Erro interno ao salvar resposta.' });
        }
    },
 
    async buscarPorUsuario(req, res) {
        const { id } = req.params;
 
        try {
            const respostas = await RespostaModel.buscarPorUsuario(id);
 
            if (!respostas.length) {
                return res.status(404).json({ erro: 'Nenhuma resposta encontrada para este usuário.' });
            }
 
            res.json(respostas);
 
        } catch (err) {
            console.error('Erro ao buscar respostas:', err);
            res.status(500).json({ erro: 'Erro interno ao buscar respostas.' });
        }
    },
 
    async buscarPlacarGeral(req, res) {
        try {
            const placar = await RespostaModel.buscarPlacarGeral();
 
            if (!placar.length) {
                return res.status(404).json({ erro: 'Nenhuma resposta registrada ainda.' });
            }
 
            res.json(placar);
 
        } catch (err) {
            console.error('Erro ao buscar placar:', err);
            res.status(500).json({ erro: 'Erro interno ao buscar placar.' });
        }
    }
 
};
 
module.exports = RespostaController;
 