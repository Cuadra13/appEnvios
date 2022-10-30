const{request, response} = require('express')
const { ListadoPaquetes } = require('../models/paquetes')
const {guardarDB, leerDB } = require('../helpers/gestorDB')


const GetPaquetes = (req = request,res = response) =>{
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostPaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.creardetalleEnvios(req.body)
    guardarDB(lista.listadoArr,'paquetes')
    res.send('Registro creado')
}

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