const{request, response} = require('express')
const { ListadoPrecios } = require('../models/precios')
const {guardarDB, leerDB } = require('../helpers/gestorDB')

const GetPrecios = (req = request,res = response) =>{
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostPrecios = (req = request, res = response) =>{
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearprecios(req.body)
    guardarDB(lista.listadoArr,'precios')
    res.send('Registro creado')
}

const putPrecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    const datos = lista.listadoArr.map(p =>
p.id == req.params.id
?{"id":p.id,...req.body}
:p
        );
    guardarDB(datos,'precios')
    res.send('Registro actualizado')
}

const deletePrecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>item.id !== req.params.id )
    guardarDB(data,'precios')
    res.send('Registro eliminado')
}

module.exports = {
    GetPrecios,
    PostPrecios,
    putPrecios,
    deletePrecios
}