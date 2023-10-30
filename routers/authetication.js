const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const router = express.Router();

const { config_login_page } = require('../config/pages');

router.get('/login', (req, res) => {    
    res.render('login', config_login_page);
    config_login_page.clearMessages();
});

router.post('/auth', async (req, res) => {
    const { username, password } = req.body;

    if (!username) {
        config_login_page.msg_error = 'Usuário não informado!';
        res.redirect('/admin/login');
    }

    if (!password) {
        config_login_page.msg_error = 'Senha não informada!';
        res.redirect('/admin/login');
    }

    try {
        const user = await User.findOne({ where: {username: username}});

        if (!user) {
            config_login_page.msg_error = 'Usuário não encontrado!';
            res.redirect('/admin/login');
        } else {
            const comparePassword = await bcrypt.compare(password, user.password);
            
            if (!comparePassword) {
                config_login_page.msg_error = 'Credenciais erradas!';
                res.redirect('/admin/login');
            } else {
                
            }
        }
    } catch (error) {
        config_login_page.msg_error = 'Error no servidor!';
        res.redirect('/admin/login');
    }
});

module.exports = router;