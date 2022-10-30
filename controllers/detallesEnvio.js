const{request, response} = require('express')

const GetdetallesEnvios = (req = request,res = response) =>
    res.send('GET Endpoint para Detalle Envios')

const PostdetalleEnvios = (req = request, res = response) =>
res.send('POST Endpoint para Detalle Envios')

const putdetalleEnvios = (req = request, res = response) =>
res.send('PUT Endpoint para Detalle Envios')

const deletedetalleEnvios = (req = request, res = response) =>
res.send('Endpoint para Detalle Envios')

module.exports = {
    GetdetallesEnvios,
    PostdetalleEnvios,
    putdetalleEnvios,
    deletedetalleEnvios
}