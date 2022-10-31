const{request, response} = require('express')
const { ListadoEnvios } = require('../models/envios')
const {guardarDB, leerDB } = require('../helpers/gestorDB')


const GetEnvios = (req = request,res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostEnvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro creado')
}


const putEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.actualizarEnvio(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro actualizado')
}

const deleteEnvios = (req = request, res = response) =>
res.send('Endpoint para  Envios')

module.exports = {
    GetEnvios,
    PostEnvios,
    putEnvios,
    deleteEnvios
}