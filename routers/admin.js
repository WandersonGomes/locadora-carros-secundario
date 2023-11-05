const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');
const routerCustomer = require('./customers');
const routerCar = require('./car')

const { config_dashboard_page, config_about_page} = require('../config/pages');

router.use('/customers', routerCustomer);
router.use('/car', routerCar);

router.get('/dashboard', isAdmin, (req, res) => {
    res.render('dashboard', config_dashboard_page);
    config_dashboard_page.clearMessages();
});

router.get('/about', isAdmin, (req, res) => {
    res.render('about', config_about_page);
});

module.exports = router;