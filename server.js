const express = require('express');
const session = require('express-session');
const { config_session } = require('./config/authentication');
const { engine } = require('express-handlebars');
const routerAuthentication = require('./routers/authetication');

const app = express();
const port = process.env.PORT || 3000;

//JSON AND URLENCODED
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTERS
app.use('/admin', routerAuthentication);

//EXPRESS-SESSION
app.use(session(config_session));

//EXPRESS-HANDLEBARS
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//PUBLIC DIRECTORY
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});