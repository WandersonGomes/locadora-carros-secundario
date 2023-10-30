const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');

const { config_dashboard_page } = require('../config/pages');

router.get('/dashboard', isAdmin, (req, res) => {
    res.render('dashboard', config_dashboard_page);
    config_dashboard_page.clearMessages();
});

module.exports = router;