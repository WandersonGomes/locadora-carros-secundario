const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');

//rota get para exibir página
router.get('/customers', isAdmin, (req, res) => {
    res.render('customers');
});

module.exports = router;

/*
//importando banco de dados
const db = require('./models');

//função para exibir
let search = () => {
    db.Customer.findAll().then(x => {
        
        x.forEach( user => {
            console.log('User:', user.toJSON());
        });
        
    }).catch(error => {
        console.error('Erro ao recuperar os usuários:', error);
    });
    
}

search()
*/