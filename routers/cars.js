const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');
const { Car } = require('../database/models');
const { config_cars_page, config_cars_details_page} = require('../config/pages');

router.use(isAdmin);

router.get('/', (req, res)=>{
    res.render('cars-add    ', config_cars_page);
})

router.get('/search', async (req, res) => {

    const car = await Car.findAll();
    const carJSON = car.map(car => car.toJSON())

    console.log(carJSON)
    
});

router.post('/create', async (req, res) => {

    const data_form_car = {
        nameOwner: req.body.nome,
        plate: req.body.placa,
        model: req.body.modelo,
        year: parseInt(req.body.ano),
        yearModel: parseInt(req.body.anoModelo),
        licensing: parseInt(req.body.licenciamento),
        color: req.body.cor,
        renavan: parseInt(req.body.renavan),
        chassi: req.body.chassi,
        motor: req.body.motor,
        crv: parseInt(req.body.crv),
        codeCla: parseInt(req.body.cla),
        fuel: req.body.combustivel,
        lotacao: parseInt(req.body.lotacao),
        category: req.body.categoria,
        cpfOwner: req.body.cpf,
        city: req.body.cidade,
        opcionais: req.body.opcionais
    };

    console.log(data_form_car)
    const car = await Car.create(data_form_car);
    console.log(car)

  if (car instanceof Customer) {
        req.flash('success', 'Carro cadastrado com sucesso!');
    } else {
        req.flash('error', 'Problema ao adicionar o Carro!');
    }

    res.redirect('/admin/car/');
});

module.exports = router