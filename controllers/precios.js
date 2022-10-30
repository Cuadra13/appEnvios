const{request, response} = require('express')

const GetPrecios = (req = request,res = response) =>
    res.send('GET Endpoint para  precios')

const PostPrecios = (req = request, res = response) =>
res.send('POST Endpoint para  precios')

const putPrecios = (req = request, res = response) =>
res.send('PUT Endpoint para  precios')

const deletePrecios = (req = request, res = response) =>
res.send('Endpoint para precios')

module.exports = {
    GetPrecios,
    PostPrecios,
    putPrecios,
    deletePrecios
}