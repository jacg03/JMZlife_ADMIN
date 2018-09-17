import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { AgregarVentaComponent } from './components/ventas/agregar-venta/agregar-venta.component';
import { FormsModule } from '@angular/forms';
import { ClientesService } from './services/clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { SeleccionarClienteComponent } from './components/clientes/seleccionar-cliente/seleccionar-cliente.component';
import { ConsultarComponent } from './components/consultar/consultar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VentasComponent,
    ProveedoresComponent,
    ClientesComponent,
    ProductosComponent,
    InicioComponent,
    AgregarClienteComponent,
    AgregarVentaComponent,
    SeleccionarClienteComponent,
    ConsultarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
