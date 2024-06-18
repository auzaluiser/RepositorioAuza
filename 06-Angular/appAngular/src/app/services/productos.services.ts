import { Injectable } from "@angular/core";
import { Producto } from "../models/producto.models";

@Injectable({ providedIn: 'root' }) //que es esto?
export class ProductosServices {
    constructor() {
        console.log('¡Servicio listo para usar!');
    }
    private productos: Producto[] = [
        { nombre: 'audifonos', img: 'https://th.bing.com/th/id/OIP.fbYGCNmgbzw1b0cVNKo7lAHaIa?w=186&h=211&c=7&r=0&o=5&pid=1.7', precio: 100 },
        { nombre: 'tenis', img: 'https://th.bing.com/th/id/OIP.c7PbqjF0agoERNS-fKXI7AHaHa?w=191&h=191&c=7&r=0&o=5&pid=1.7', precio: 100 },
        { nombre: 'reloj', img: 'https://th.bing.com/th/id/OIP.7KACvwkDYdHVb1vAD25ZiAAAAA?w=182&h=182&c=7&r=0&o=5&pid=1.7', precio: 100 }
    ];

    //sintaxis: nombre del metodo: objeto que retorna
    getProductos(): Producto[] {
        return this.productos;
    }

    //devuelve un producto por id
    getProducto(id: number) {
        return this.productos[id];
    }

    //buscamos productos por un parametro
    buscarProductos(termino: string): Producto[] {
        let productoArr: Producto[] = [];
        termino = termino.toLocaleLowerCase();
        for (let i = 0; i < this.productos.length; i++) {
            let producto = this.productos[i];
            let nombre = producto.nombre.toLocaleLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                productoArr.push(producto)
            }
        }
        return productoArr;
    }
}