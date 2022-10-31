const{request, response} = require('express')
const { ListadodetallesEnvios } = require('../models/detallesEnvios')
const {guardarDB, leerDB } = require('../helpers/gestorDB')

const GetdetallesEnvios = (req = request,res = response) =>{
    let lista = new ListadodetallesEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostdetalleEnvios = (req = request, res = response) =>{
    let lista = new ListadodetallesEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.creardetalleEnvios(req.body)
    guardarDB(lista.listadoArr,'detalleEnvios')
    res.send('Registro creado')
}

const putdetalleEnvios = (req = request, res = response) => {
    let lista = new ListadodetallesEnvios()
    let datosJSON = leerDB('detallesEnvio');
    lista.cargarTareasFromArray(datosJSON)
    const datos = lista.listadoArr.map(p =>
p.id == req.params.id
?{"id":p.id,...req.body}
:p
        );
    guardarDB(datos,'detalleEnvio')
    res.send('Registro actualizado')
}

const deletedetalleEnvios = (req = request, res = response) => {
    let lista = new ListadodetallesEnvios()
    let datosJSON = leerDB('detallesEnvio');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>item.id !== req.params.id )
    guardarDB(data,'detalleEnvio')
    res.send('Registro eliminado')
}

module.exports = {
    GetdetallesEnvios,
    PostdetalleEnvios,
    putdetalleEnvios,
    deletedetalleEnvios
}