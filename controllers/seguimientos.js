const{request, response} = require('express')

const Getseguimientos = (req = request,res = response) =>
    res.send('GET Endpoint para seguimientos')

const Postseguimientos = (req = request, res = response) =>
res.send('POST Endpoint para seguimientos')

const putseguimientos = (req = request, res = response) =>
res.send('PUT Endpoint para seguimientos')

const deleteseguimientos = (req = request, res = response) =>
res.send('Endpoint para seguimientos')

module.exports = {
    Getseguimientos,
    Postseguimientos,
    putseguimientos,
    deleteseguimientos
}