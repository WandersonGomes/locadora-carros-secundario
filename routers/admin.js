const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');
const { Customer } = require('../database/models')

const { 
        config_dashboard_page, 
        config_about_page, 
        config_customers_page, 
        config_customers_add_page, 
        config_customers_details_page,
        config_customers_edit_page 
    } = require('../config/pages');

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

router.post('/customers/create', isAdmin, async (req, res) => {
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

router.get('/customers/details/:id', isAdmin, async (req, res) => {
    //clear customer previous
    config_customers_details_page.customer = undefined;

    const customer = await Customer.findOne({ where: {id: req.params.id}});
    if (customer instanceof Customer) {
        config_customers_details_page.customer = customer.toJSON();
    }
    
    console.log(config_customers_details_page.customer);
    res.render('customer-details', config_customers_details_page);
});

router.get('/customers/edit/:id', isAdmin, async (req, res) => {
    config_customers_edit_page.customer = undefined;
    const customer = await Customer.findOne({where: {id: req.params.id}});
    
    if (customer instanceof Customer) {
        config_customers_edit_page.customer = customer.toJSON();
    }

    res.render('customer-edit', config_customers_edit_page);
});

router.post('/customers/update', isAdmin, async (req, res) => {
    const customer = await Customer.findOne({where: {id: req.body.id}});

    if (customer instanceof Customer) {
        customer.set({
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
        });

        await customer.save();
        req.flash('success', 'Cliente atualizado com sucesso!');
    } else {
        req.flash('error', 'Cliente não encontrado!');
    }

    res.status(200).redirect('/admin/customers/');
});

router.get('/about', isAdmin, (req, res) => {
    res.render('about', config_about_page);
});

module.exports = router;