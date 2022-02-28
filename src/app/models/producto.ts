export class Producto {
    _id: string;
    nombre: string;
    cantidad: number;
    proveedor: string;
     

    constructor(nombre: string, cantidad: number, proveedor: string, _id: string){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.proveedor = proveedor;
       
    }
}
