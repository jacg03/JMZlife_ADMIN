import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
  proveedores:any[] = [];
  proveedoresshow:any[];
  textsearch:string;

  constructor(private _proveedoresService:ProveedoresService) { }

  ngOnInit() {
    this._proveedoresService
      .get()
      .subscribe((success:any[]) => {
        for(let p of success)
        {
          let prod = "";
          for(let product of p.Productos)
          {
            prod = prod + product.nombre; 
          }
          p.Productos = prod;
          this.proveedores.push(p);
        }

        this.proveedoresshow = this.proveedores;
      });
  }

  SeleccionarCliente(id){
    alert(id);
  }

  public getClientesByName() {
    this.textsearch = this.textsearch.toLowerCase();
    let result:any = [];
    for(let cliente of this.proveedores){    
      let nombre = cliente.nombre.toLowerCase();
      let estado = cliente.Productos.toLowerCase();
      let telefono = cliente.telefono;
      if( nombre.indexOf( this.textsearch ) >= 0 || estado.indexOf( this.textsearch ) >= 0 || telefono.indexOf( this.textsearch ) >= 0){
        result.push(cliente);
      }
    }

    this.proveedoresshow = result;
  }
}
