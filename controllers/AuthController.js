const {Usuario} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

module.exports = {
    login: async (req, res) => {
        // Ler dados do body para variáveis email e senha
        const {email, senha} = req.body;
        // Usar o model usuário para achar um usuário com o email dado
        const usuario = await Usuario.findOne(
            {where: {email}}
        )
        // Verificar se o usuário existe, caso não existir:
        if(!usuario){
            return res.status(403).json({error: "Login inválido"})
        }
        // Verificar a senha passada versus a senha do banco (encrypted)
        // Caso senha não bata:
        // res.status(403).json({error:"Login inválido"})
        if (!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(403).json({error:"Login inválido"})
        } 
        // Removendo a senha para que ela não seja enviada de volta
        usuario.senha = undefined;

        // Criando o token
        let token = jwt.sign({usuario: usuario}, "segredo");

        // Se chegar até aqui: res.status(200).json({msg:"sucesso!"});
        res.status(200).json({usuario: usuario, token})
    }
}