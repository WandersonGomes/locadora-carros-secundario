const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');
const routerCustomer = require('./customers');
const routerCars = require('./cars');
const routerRentals = require('./rentals');

const { Customer, Car } = require('../database/models');

const { config_dashboard_page, config_about_page} = require('../config/pages');

router.use('/customers', routerCustomer);
router.use('/cars', routerCars);
router.use('/rentals', routerRentals);

router.use(isAdmin);

router.get('/dashboard', async (req, res) => {
    config_dashboard_page.amount_cars_enable = await Car.count({where: {status: 'disponivel'}});
    config_dashboard_page.amount_customers = await Customer.count();

    res.render('dashboard', config_dashboard_page);
    config_dashboard_page.clearMessages();
});

router.get('/about', (req, res) => {
    res.render('about', config_about_page);
});

module.exports = router;