const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const { config_session } = require('./config/authentication');
const { engine } = require('express-handlebars');

const routerAuthentication = require('./routers/authetication');
const routerDashboard = require('./routers/admin');

const app = express();
const port = process.env.PORT || 3000;

//EXPRESS-FLASH
app.use(flash());

//JSON AND URLENCODED
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EXPRESS-SESSION
app.use(session(config_session));

//ROUTERS
app.use('/auth', routerAuthentication);
app.use('/admin', routerDashboard);

//EXPRESS-HANDLEBARS
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//PUBLIC DIRECTORY
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});