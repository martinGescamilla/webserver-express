const express = require('express');
const app = express();
const hbs = require('hbs');
require('./helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', function(req, res) {
    //res.send('Hello World');

    res.render('home', {
        nombre: 'martin',
        //  anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {
    //res.send('Hello World');

    res.render('about', {
        //  anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});