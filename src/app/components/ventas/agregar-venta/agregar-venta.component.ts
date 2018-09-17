import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.scss']
})
export class AgregarVentaComponent implements OnInit {
 
  constructor(private router:Router) {
  }

  ngOnInit() {
    this.router.navigate(['/cliente-existente']);
  }
}
