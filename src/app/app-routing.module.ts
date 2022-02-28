import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

// componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { HomeComponent } from './components/home/home.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { TallerBitComponent } from './components/taller-bit/taller-bit.component';
const routes: Routes = [
{path: '', component: HomeComponent},
  { path: 'ver-productos', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  {path: 'creditos', component: CreditosComponent},
  {path: 'informacion', component: TallerBitComponent},
  { path: '**', component: RedirectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
