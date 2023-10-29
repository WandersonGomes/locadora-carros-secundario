const express = require('express');
const { engine } = require('handlebars');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});