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
    let lista = new ListadodetallesEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    const datos = lista.listadoArr.map(p =>
p.id == req.params.id
?{"id":p.id,...req.body}
:p
        );
    guardarDB(datos,'envios')
    res.send('Registro actualizado')
}

const deleteEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>item.id !== req.params.id )
    guardarDB(data,'envios')
    res.send('Registro eliminado')
}

module.exports = {
    GetEnvios,
    PostEnvios,
    putEnvios,
    deleteEnvios
}