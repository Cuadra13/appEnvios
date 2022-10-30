const{request, response} = require('express')
const { ListadodetalleEnvios } = require('../models/detallesEnvios')
const {guardarDB, leerDB } = require('../helpers/gestorDB')

const GetdetallesEnvios = (req = request,res = response) =>{
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostdetalleEnvios = (req = request, res = response) =>{
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.creardetalleEnvios(req.body)
    guardarDB(lista.listadoArr,'detalleEnvios')
    res.send('Registro creado')
}

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