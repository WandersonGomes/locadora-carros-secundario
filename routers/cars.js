const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');
const { Car } = require('../database/models');
const { 
    config_cars_page,
    config_cars_add_page,
    config_cars_details_page
} = require('../config/pages');

router.use(isAdmin);

router.get('/', async (req, res) => {
    config_cars_page.msg_success = req.flash('success');
    config_cars_page.msg_error = req.flash('error');
    
    config_cars_page.cars = undefined;
    const cars = await Car.findAll();    
    
    if (cars) {
        config_cars_page.cars = cars.map(car => car.toJSON());
    }

    res.render('cars', config_cars_page);
});

router.get('/add', async (req, res) => {
    res.render('cars-add', config_cars_add_page);
});

router.post('/create', async (req, res) => {
    const data_form_car = {
        plate: req.body.plate,
        model: req.body.model,
        year: req.body.year,
        yearModel: req.body.year_model,
        licensing: req.body.licensing,
        color: req.body.color,
        renavam: req.body.renavam,
        chassi: req.body.chassi,
        motor: req.body.motor,
        crv: req.body.crv,
        codeCLA: req.body.code_cla,
        fuel: req.body.fuel,
        category: req.body.category,
        cpfOwner: req.body.cpf_owner,
        nameOwner: req.body.name_owner,
        city: req.body.city,
        optional: req.body.optional,
        capacity: req.body.capacity,
        priceDaily: 100.00
    };

    const car = await Car.create(data_form_car);

    if (car instanceof Car) {
        req.flash('success', 'Carro cadastrado com sucesso!');
    } else {
        req.flash('error', 'Problema ao adicionar o carro!');
    }

    res.redirect('/admin/cars/');
});

router.get('/details/:id', async (req, res) => {
    const car = await Car.findOne({where:{id:req.params.id}});
    config_cars_details_page.car = car.toJSON();

    res.render('cars-details', config_cars_details_page);
});

router.get('/delete/:id', async (req, res) => {
    const id_car = req.params.id;
    const result_delete = await Car.destroy({ where: {id: id_car}});

    if(result_delete)
        res.redirect('/admin/cars/');
    else
        console.log('Erro ao ecluir')
    
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