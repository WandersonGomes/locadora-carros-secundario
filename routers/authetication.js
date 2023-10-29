const express = require('express');
const router = express.Router();

const { config_login_page } = require('../config/pages');

router.get('/login', (req, res) => {    
    res.render('login', config_login_page);

    config_login_page.clearMessages();
});

router.post('/auth', (req, res) => {
    const { username, password } = req.body;

    if (username === 'usuario' && password === 'senha') {
        config_login_page.msg_success = 'Usuário logado com sucesso!';
    } else {
        config_login_page.msg_error = 'Usuário ou senha inválido!';
    }

    res.redirect('/admin/login');
});

module.exports = router;