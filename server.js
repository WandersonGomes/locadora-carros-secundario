const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});