const express = require('express')

class Server{
  constructor(){
    this.app = express()
    //CORS
    this.app.use(cors());
    //LEctura y parseo del body
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static('public'));
    this.routes();
  }
  routes(){
   
    this.app.use('/precios', require('../routes/precios'))
    this.app.use('/paquetes', require('../routes/precios'))
    this.app.use('/envios', require('../routes/precios'))
    this.app.use('/detallesEnvio', require('../routes/precios'))
    this.app.use('/seguimiento', require('../routes/precios'))


  }

  listen(){
    this.app.listen(process.env.PORT, () =>
    console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT))
  }
}

module.exports = Server