// a - Criar uma rota POST para o ENDPOINT /login direcionando a requisição para AuthController .login

var express = require('express');
var router = express.Router();

const AuthController = require('../controllers/AuthController');

router.post('/login', AuthController.index);

module.exports = router;