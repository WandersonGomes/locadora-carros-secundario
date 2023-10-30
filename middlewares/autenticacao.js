const config_login_page = require('../config/pages');

const isAdmin = (req, res, next) => {
    try {
        if (!req.session.user) {
            config_login_page.msg_error = 'Acesso não autorizado!';
            res.redirect('/admin/login');
        } else {
            if (!req.session.user.perfil === 'administrator') {
                return next();   
            } else {
                config_login_page.msg_error = 'Acesso não autorizado!';
                res.redirect('/admin/login');
            }
        }
    } catch (err) {
        config_login_page.msg_error = 'Error no servidor!';
        res.redirect('/admin/login');
    }
}

module.exports = {
    isAdmin,
}