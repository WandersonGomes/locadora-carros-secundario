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
        res.redirect('/auth/login');
    }

    if (!password) {
        config_login_page.msg_error = 'Senha não informada!';
        res.redirect('/auth/login');
    }

    try {
        const user = await User.findOne({ where: {username: username}});

        if (!user) {
            config_login_page.msg_error = 'Usuário não encontrado!';
            res.redirect('/auth/login');
        } else {
            const comparePassword = await bcrypt.compare(password, user.password);

            if (!comparePassword) {
                config_login_page.msg_error = 'Credenciais inválidas!';
                res.redirect('/auth/login');
            } else {
                req.session.user = { id: user.id, username: user.username, perfil: user.perfil };
                res.redirect('/admin/dashboard');
            }
        }
    } catch (error) {
        config_login_page.msg_error = 'Error no servidor!';
        res.redirect('/auth/login');
    }
});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                config_login_page.msg_error = 'Erro no seu logout!';
            } else {
                config_login_page.msg_success = 'Logout realizado com sucesso!';
            }
        });
    } else {
        config_login_page.msg_error = 'Usuário não logado!';
    }

    res.redirect('/auth/login');
});

module.exports = router;