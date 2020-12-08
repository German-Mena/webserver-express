const express = require("express");
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

// Express HBS engine
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/parciales')

app.get("/", (req, res) => {

  // De esta forma envio variables al .hbs
  res.render('home', {
    Nombre: 'Germán Mena',
    Anio: new Date().getFullYear()
  });

});

app.get("/home", (req, res) => {

  res.render('home', {
    Nombre: 'Germán Mena'
  });

});

app.get("/about", (req, res) => {

  res.render('about', {
    Nombre: 'Germán Mena'
  })

});

app.listen(port, () => {
  console.log(`Escuchando peticiones en puerto ${port}`);
});

/*

app.get("/data", (req, res) => {
  res.send("Hola Data!");
});

*/

