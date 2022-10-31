const {v4: uuidv4 } = require('uuid');

class Seguimientos{
    constructor(codigo, fecha, hora, lugar){
        this.id=uuidv4()
        this.fecha=fecha
        this.hora = hora
        this.lugar=lugar
    }
}

class ListadoSeguimientos{
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
        datos.forEach(Seguimientos =>{
            this._listado[Seguimientos.id] = Seguimientos;
        });
    }
    crearseguimientos(datos){
        const Seguimientos = new Seguimientos(
            datos.fecha,
            datos.hora,
            datos.lugar);
            this._listado[Precios.id] = Seguimientos;
    }

    actualizarseguimientos(datos){
        const seguimiento = this._listado.map( Seguimientos =>
        Seguimientosuimientos.id === datos.id
            ? {
                ...Seguimientos,
                fecha: datos.fecha,
                hora: datos.hora,
                lugar : datos.lugar
            }
            : seguimiento
        );
    
        this._listado = seguimiento;
    }

    }
    
    
    module.exports ={
    ListadoSeguimientos
    }