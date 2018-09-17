import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-seleccionar-cliente',
  templateUrl: './seleccionar-cliente.component.html',
  styleUrls: ['./seleccionar-cliente.component.scss']
})
export class SeleccionarClienteComponent implements OnInit {
  clientes: any[] = [];
  clientesshow: any[] = [];

  textsearch:string;

  constructor(private _clientesService: ClientesService) { }

  ngOnInit() {
    this._clientesService
    .getClientes()
    .subscribe((success: any[]) => {

      this.clientes = success;
      this.clientesshow = this.clientes;
    });
  }
  
  SeleccionarCliente(id){
    alert(id);
  }

  public getClientesByName() {
    this.textsearch = this.textsearch.toLowerCase();
    let result:any = [];
    for(let cliente of this.clientes){    
      let nombre = cliente.nombre.toLowerCase();
      let estado = cliente.estado.toLowerCase();
      let telefono = cliente.telefono;
      if( nombre.indexOf( this.textsearch ) >= 0 || estado.indexOf( this.textsearch ) >= 0 || telefono.indexOf( this.textsearch ) >= 0){
        result.push(cliente);
      }
    }

    this.clientesshow = result;
  }

}
