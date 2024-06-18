import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { CardbuscadorComponent } from './components/cardbuscador/cardbuscador.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'acercade', component: AboutComponent },
    { path: 'productos', component: CardproductosComponent },
    { path: 'producto/:id', component: CardproductoComponent },
    { path: 'buscar/:termino', component: CardbuscadorComponent},
    { path: '**', component: InicioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }   