const isAdmin = (req, res, next) => {
    try {
        if (!req.session.user) {
            req.flash('error', 'Acesso não autorizado!');
            return res.redirect('/auth/login');
        } else {
            if (req.session.user.perfil === 'administrator') {
                return next();   
            } else {
                req.flash('error', 'Acesso não autorizado!');
                return res.redirect('/auth/login');
            }
        }
    } catch (err) {
        req.flash('error', 'Error no servidor!');
        return res.redirect('/auth/login');
    }
}

module.exports = {
    isAdmin,
}