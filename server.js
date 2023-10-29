const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

//EXPRESS-HANDLEBARS
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//PUBLIC DIRECTORY
app.use(express.static('public'));

app.get('/', (req, res) => {
    const config_page_login = {
        title: 'Login',
        styles: [
            '/css/login.css'
        ]
    }
    res.render('login', config_page_login);
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});