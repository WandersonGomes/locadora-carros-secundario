const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');

const { config_dashboard_page, config_about_page } = require('../config/pages');

router.get('/dashboard', isAdmin, (req, res) => {
    res.render('dashboard', config_dashboard_page);
    config_dashboard_page.clearMessages();
});

router.get('/customers', isAdmin, (req, res) => {
    res.render('customers');
});

router.get('/about', isAdmin, (req, res) => {
    res.render('about', config_about_page);
});



module.exports = router;