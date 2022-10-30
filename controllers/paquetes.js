const{request, response} = require('express')

const GetPaquetes = (req = request,res = response) =>
    res.send('GET Endpoint para  Paquetes')

const PostPaquetes = (req = request, res = response) =>
res.send('POST Endpoint para Paquetes')

const putPaquetes = (req = request, res = response) =>
res.send('PUT Endpoint para Paquetes')

const deletePaquetes = (req = request, res = response) =>
res.send('Endpoint para Paquetes')

module.exports = {
    GetPaquetes,
    PostPaquetes,
    putPaquetes,
    deletePaquetes
}