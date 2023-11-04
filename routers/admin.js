const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');
const { Customer } = require('../database/models')

const { config_dashboard_page, config_about_page, config_customers_page, config_customers_add_page } = require('../config/pages');

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

router.get('/customers/add', isAdmin, (req, res) => {
    res.render('customer-add', config_customers_add_page);
});

router.post('/customers/save', isAdmin, async (req, res) => {
    const data_form_customer = {
        name: req.body.name,
        lastName: req.body.lastname,
        cpf: req.body.cpf,
        rg: req.body.rg,
        email: req.body.email,
        address: req.body.address,
        complement: req.body.complement,
        city: req.body.city,
        state: req.body.state,
        cep: req.body.cep
    };

    const customer = await Customer.create(data_form_customer);

    if (customer instanceof Customer) {
        req.flash('success', 'Cliente cadastrado com sucesso!');
    } else {
        req.flash('error', 'Problema ao adicionar o Cliente!');
    }

    res.redirect('/admin/customers/');
});

router.get('/about', isAdmin, (req, res) => {
    res.render('about', config_about_page);
});

module.exports = router;