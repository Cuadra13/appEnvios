const {v4: uuidv4 } = require('uuid');

class Paquetes{
    constructor(codigo, descripcion, peso, volumen, clsificacion){
        this.id=uuidv4()
        this.descripcion=descripcion
        this.peso=peso
        this.volumen=volumen
        this.clasificacion=clasificacion
       
    }
}

class ListadoPaquetes{
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
        datos.forEach(paquetes =>{
            this._listado[paquetes.id] = paquetes;
        });
    }
    crearPaquetes(datos){
        const paquetes = new Paquetes(
            datos.descripcion,
            datos.peso,
            datos.volumen,
            datos.clasificacion);
            this._listado[paquetes.id] = paquetes;
}

actualizarPaquetes(datos){
    const paquetes = this._listado.map( paquete =>
    paquete.id === datos.id
        ? {
            ...paquete,
            descripcion : datos.descripcion,
            peso : datos.peso,
            volumen : datos.volumen,
            clasificacion : datos.clasificacion
        }
        : paquete
    );

    this._listado = paquetes;
}
}


module.exports ={
    ListadoPaquetes
}