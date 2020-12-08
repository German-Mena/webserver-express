
const hhtp = require('http')

hhtp.createServer((req, res) => {

  res.writeHead(200, { 'Content-type': 'application/json' })

  let salida = {
    nombre: 'German',
    edad: '23',
    url: req.url
  }

  res.write(JSON.stringify(salida))
  res.end()
})
  .listen(8080);

console.log('Escuchando en puerto 8080');

