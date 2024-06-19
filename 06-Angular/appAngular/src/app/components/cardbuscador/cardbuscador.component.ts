import { Component, OnInit } from '@angular/core';
import { CardproductoTarjetaComponent } from '../cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductosServices } from '../../services/productos.services';

@Component({
  selector: 'app-cardbuscador',
  standalone: true,
  imports: [CardproductoTarjetaComponent, CommonModule],
  templateUrl: './cardbuscador.component.html',
  styleUrl: './cardbuscador.component.css'
})

export class CardbuscadorComponent implements OnInit {
  productos: any[] = []
  termino: string='';
  constructor(private activatedRoute:ActivatedRoute,
    private _productosServices: ProductosServices) {}
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.productos = this._productosServices.buscarProductos
      (params['termino']);
      console.log(this.productos);
    })
  }
}