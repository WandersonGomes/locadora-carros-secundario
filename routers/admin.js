const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/autenticacao');

router.get('/dashboard', isAdmin, (req, res) => {
    res.render('dashboard');
});

module.exports = router;