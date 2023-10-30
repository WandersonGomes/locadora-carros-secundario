const config_login_page = require('../config/pages');

const isAdmin = (req, res, next) => {
    try {
        if (!req.session.user) {
            config_login_page.msg_error = 'Acesso não autorizado!';
            return res.redirect('/auth/login');
        } else {
            if (req.session.user.perfil === 'administrato') {
                return next();   
            } else {
                config_login_page.msg_error = 'Acesso não autorizado!';
                return res.redirect('/auth/login');
            }
        }
    } catch (err) {
        config_login_page.msg_error = 'Error no servidor!';
        return res.redirect('/auth/login');
    }
}

module.exports = {
    isAdmin,
}