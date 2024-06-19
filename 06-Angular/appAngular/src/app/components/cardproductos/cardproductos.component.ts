import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductosServices } from '../../services/productos.services';
import { Router } from '@angular/router';
import { CardproductoTarjetaComponent } from '../cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardproductos',
  standalone: true,
  imports: [CardproductoTarjetaComponent,CommonModule],
  templateUrl: './cardproductos.component.html',
  styleUrl: './cardproductos.component.css'
})
export class CardproductosComponent implements OnInit {
productos: Producto[]=[];
constructor(private _productoServices:ProductosServices,
  private router:Router
){}
  ngOnInit(): void {
  this.productos=this._productoServices.getProductos();
  console.log(this.productos)  ;
  }
  verProducto(idx:number){
  }
}