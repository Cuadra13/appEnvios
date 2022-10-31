const{request, response} = require('express')
const { ListadoSeguimientos } = require('../models/seguimientos')
const {guardarDB, leerDB } = require('../helpers/gestorDB')

const Getseguimientos = (req = request,res = response) =>{
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const Postseguimientos = (req = request, res = response) =>{
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearseguimientos(req.body)
    guardarDB(lista.listadoArr,'seguimientos')
    res.send('Registro creado')
}

const putseguimientos = (req = request, res = response) => {
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    lista.actualizarseguimientos(req.body)
    guardarDB(lista.listadoArr,'seguimientos')
    res.send('Registro actualizado')
}

const deleteseguimientos = (req = request, res = response) => {
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.deleteseguimientos(req.body)
    guardarDB(lista.listadoArr,'seguimientos')
    res.send('Registro eliminado')
}

module.exports = {
    Getseguimientos,
    Postseguimientos,
    putseguimientos,
    deleteseguimientos
}