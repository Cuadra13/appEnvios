const {v4: uuidv4 } = require('uuid');

class Precios{
    constructor(codigo, cantidad, valor, estado){
        this.id=uuidv4()
        this.cantidad=cantidad
        this.valor=valor
        this.estado=estado
    }
}

class ListadoPrecios{
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
    datos.forEach(Precios =>{
        this._listado[Precios.id] = Precios;
    });
}
crearprecios(datos){
    const Precios = new Precios(
        datos.cantidad,
        datos.valor,
        datos.estado);
        this._listado[Precios.id] = Precios;
}

actualizarprecios(datos){
    const precios = this._listado.map( precio =>
    precio.id === datos.id
        ? {
            ...precio,
            cantidad : datos.cantidad,
            valor : datos.valor,
            estado : datos.estado
        }
        : precio
    );

    this._listado = precios;
}

deleteprecios(datos){
    var precio = this._listado.filter(( precios) =>
    precios.id === datos.id);
      console.log(precio);
}

}


module.exports ={
ListadoPrecios
}