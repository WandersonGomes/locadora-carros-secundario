const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');
const { config_rentals_page } = require('../config/pages');
const { Rental, Customer, Car } = require('../database/models');

router.use(isAdmin);

router.get('/', (req, res) => {
    res.render('rentals', config_rentals_page);
});

router.post('/add/:id_customer/:id_car', async (req, res) => {
    console.log(req.params);
    const rental = await Rental.create({
        id_customer: req.params.id_customer,
        id_car: req.params.id_car,
        start_rental_date: new Date(),
        finish_rental_date: new Date(),
    });

    if (rental instanceof Rental) {
        req.flash('success', 'Carro alugado com sucesso!');
        const car = await Car.findOne({where: {id: req.params.id_car}});
        await car.update({
            status: 'disable'
        });
    } else {
        req.flash('error', 'Não foi possível alugar!');
    }

    res.send('ok');
});

module.exports = router;