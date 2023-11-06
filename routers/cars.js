const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');
const { Car } = require('../database/models');
const { config_cars_page } = require('../config/pages');

router.use(isAdmin);

router.get('/', async (req, res) => {

    const car = await Car.findAll();
    const carJSON = car.map(car => car.toJSON())
    
    console.log(carJSON);

    res.render('cars', config_cars_page);
    
});

module.exports = router