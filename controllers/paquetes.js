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

const putPaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    const datos = lista.listadoArr.map(p =>
p.id == req.params.id
?{"id":p.id,...req.body}
:p
        );
    guardarDB(datos,'paquetes')
    res.send('Registro actualizado')
}

const deletePaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>item.id !== req.params.id )
    guardarDB(data,'paquetes')
    res.send('Registro eliminado')
}
module.exports = {
    GetPaquetes,
    PostPaquetes,
    putPaquetes,
    deletePaquetes
}