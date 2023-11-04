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
    config_customers_page.msg_error = req.flash('error');
    config_customers_page.msg_success = req.flash('success');

    const customers = await Customer.findAll({
        attributes: ['id', 'name', 'lastName', 'cpf']
    });

    const customersJSON = customers.map(customer => customer.toJSON())
    config_customers_page.customers = customersJSON;

    res.render('customers', config_customers_page);
    
});

router.delete('/customers/delete/:id', isAdmin, async (req, res) => {
    const id_customer = req.params.id;

    const result_delete = await Customer.destroy({ where: {id: id_customer}});

    if (result_delete)
        req.flash('success', 'Cliente excluído com sucesso!');
    else
        req.flash('error', 'Error ao excluir Cliente!');

    res.status(200).send('ok');
});

router.get('/about', isAdmin, (req, res) => {
    res.render('about', config_about_page);
});

module.exports = router;