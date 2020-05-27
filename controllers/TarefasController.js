const jwt = require("jsonwebtoken")

module.exports = {
    index: (req, res) => {
        res.send(req.headers);

        // Verificar se existe um campo Authorization nos headers

        // capturar o token

        // Levantar qual o usuário é o dono do token

        // Levantar as tarefas desse usuário
    }
}