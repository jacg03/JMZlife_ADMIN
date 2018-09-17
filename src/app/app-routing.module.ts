import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { AgregarVentaComponent } from './components/ventas/agregar-venta/agregar-venta.component';
import { SeleccionarClienteComponent } from './components/clientes/seleccionar-cliente/seleccionar-cliente.component';
import { ConsultarComponent } from './components/consultar/consultar.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarComponent
  },
  {
    path: 'consultar',
    component: ConsultarComponent,
    children: [
      {
        path: 'cliente-nuevo',
        component: AgregarClienteComponent
      },
      {
        path: 'cliente-existente',
        component: SeleccionarClienteComponent
      }
    ]
  },
  {
    path: 'ventas',
    component: VentasComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'proveedores',
    component: ProveedoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
