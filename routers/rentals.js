const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');

router.use(isAdmin);

router.get('/', (req, res) => {
    res.render('rentals');
});

module.exports = router;