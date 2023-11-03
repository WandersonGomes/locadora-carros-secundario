const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');
const { Customer } = require('../database/models')

const { config_dashboard_page, config_about_page, config_customers_page } = require('../config/pages');

router.get('/dashboard', isAdmin, (req, res) => {
    res.render('dashboard', config_dashboard_page);
    config_dashboard_page.clearMessages();
});

router.get('/customers', isAdmin, async (req, res) => {
    const customers = await Customer.findAll({
        attributes: ['id', 'name', 'lastName', 'cpf']
    });

    const customersJSON = customers.map(customer => customer.toJSON())
    config_customers_page.customers = customersJSON;

    res.render('customers', config_customers_page);
    
});

router.delete('/customers/delete/:id', isAdmin, (req, res) => {
    req.flash('error', 'mensagem de error');
    console.log(req.params.id);
    res.status(200);
});

router.get('/about', isAdmin, (req, res) => {
    res.render('about', config_about_page);
});

module.exports = router;