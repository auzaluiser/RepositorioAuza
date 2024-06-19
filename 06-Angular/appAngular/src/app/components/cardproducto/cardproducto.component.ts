import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServices } from '../../services/productos.services';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cardproducto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardproducto.component.html',
  styleUrl: './cardproducto.component.css'
})
export class CardproductoComponent implements OnInit{
  producto: any = [];
  constructor(private activatedRoute: ActivatedRoute
    , private _productosService: ProductosServices) { }
    ngOnInit():void{
      const id = this.activatedRoute.snapshot.paramMap.get('id') || '0';

      this.producto = this._productosService.getProducto(parseInt(id));
      console.log(this.producto);
    }
}