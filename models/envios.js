const {v4: uuidv4 } = require('uuid');

class Envios{
    constructor(codigo, fecha, tracking, origen, destino, emisor, destinatario){
        this.id=uuidv4()
        this.codigo=codigo
        this.fecha=fecha
        this.tracking = tracking
        this.origen=origen
        this.destino=destino
        this.emisor=emisor
        this.destinatario=destinatario
    }
}

class ListadoEnvios{
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
        datos.forEach(envio =>{
            this._listado[envio.id] = envio;
        });
    }
    crearEnvio(datos){
        const envio = new Envios(
            datos.codigo,
            datos.fecha,
            datos.tracking,
            datos.origen,
            datos.destino,
            datos.emisor,
            datos.destinatario);
            this._listado[envio.id] = envio;  
}

actualizarenvios(datos){
    const envios = this._listado.map( envio =>
    envio.id === datos.id
        ? {
            ...envio,
            codigo : datos.codigo,
            fecha : datos.fecha,
            tracking : datos.tracking,
            origen : datos.origen,
            destino : datos.destino,
            emisor : datos.emisor,
            destinatario : datos.destinatario
        }
        : envio
    );

    this._listado = envios;
}

deletedeEnvios(datos){
    var Envio = this._listado.filter(( Envios) =>
    Envios.id === datos.id);
      console.log(Envio);
}

}


module.exports ={
    ListadoEnvios
}