const {v4: uuidv4 } = require('uuid');

class detallesEnvios{
    constructor(codigo, idEnvio, idPaquetes){
        this.id=uuidv4()
        this.idEnvio=idEnvio
        this.idPaquetes=idPaquetes
    }
}

class ListadodetallesEnvios{
    constructor(){
        this._listado = {};
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }
    cargarTareasFromArray(datos = []){
        datos.forEach(detallesEnvios =>{
            this._listado[detallesEnvios.id] = detallesEnvios;
        });
    }
    creardetallesEnvios(datos){
        const detallesEnvio = new detallesEnvios(
            datos.codigo,
            datos.idEnvio,
            datos.idPaquetes
            );
            this._listado[detallesEnvio.id] = detallesEnvio;  
}
}


module.exports ={
    ListadodetallesEnvios
}