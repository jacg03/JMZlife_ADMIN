import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {
  estados: any[] = [
    "Seleccionar", "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
    "Coahuila", "Colima", "Chiapas", "Chihuahua", "Distrito Federal", "Durango",
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos",
    "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo",
    "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala",
    "Veracruz", "Yucatán", "Zacatecas"
  ];
  sexos: any[] = [
    "Seleccionar", "Masculino", "Femenino"
  ];
  cliente: any = {
    id: "00000000-0000-0000-0000-000000000000",
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    edad: null,
    estado: this.estados[0],
    sexo: this.sexos[0]
  };
  
  nombre_valido: boolean = false; telefono_valido: boolean = false; estado_valido: boolean = false;

  constructor(private _clientesservice: ClientesService, private _alerts: AlertsService) { }

  ngOnInit() {
  }

  agregarCliente() {
    if (this.cliente.nombre != "" && this.cliente.telefono != "" && this.cliente.estado != "Seleccionar") {
      this.cliente.edad = Number(this.cliente.edad);
      this._clientesservice
        .postCliente(this.cliente)
        .subscribe(res => {
          this._alerts.successAlert("¡Guardado!", "El cliente ha sido registrado de forma exitosa.");
          this.nombre_valido = false; this.telefono_valido = false; this.estado_valido = false;
          this.cliente = {
            id: "00000000-0000-0000-0000-000000000000",
            nombre: "",
            apellido: "",
            telefono: "",
            email: "",
            edad: null,
            estado: this.estados[0].name,
            sexo: this.sexos[0].name
          };
        });
    }
    else {
      if (this.cliente.estado == "Seleccionar") {
        this.estado_valido = true;
      }
      if (this.cliente.telefono == "") {
        this.telefono_valido = true;
      }
      if (this.cliente.nombre == "") {
        this.nombre_valido = true;
      }
    }
  }

}
