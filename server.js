const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const cors = require('cors');
const { config_session } = require('./config/authentication');
const { engine } = require('express-handlebars');

const routerAuthentication = require('./routers/authetication');
const routerAdmin = require('./routers/admin');

const app = express();
const port = process.env.PORT || 3000;

//CORS
app.use(cors());

//EXPRESS-FLASH
app.use(flash());

//JSON AND URLENCODED
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EXPRESS-SESSION
app.use(session(config_session));

//ROUTERS
app.use('/auth', routerAuthentication);
app.use('/admin', routerAdmin);

//EXPRESS-HANDLEBARS
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//PUBLIC DIRECTORY
app.use(express.static('public'));

//ROTA PRINCIPAL
app.use('/', (req, res) => {
    res.redirect('/auth/login');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});