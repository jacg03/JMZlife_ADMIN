import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  successAlert(title:string, text:string){
    swal(
      title,
      text,
      'success'
    );
  }
}
