import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UrlsService } from '../helpers/urls.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private ServiceURL:string;
  clientes:any[];

  constructor(private _http: HttpClient, private urls: UrlsService) {
    this.ServiceURL = this.urls.API + "Clientes"
  }

  public postCliente(data: any) {
    return this._http.post<any>(this.ServiceURL, JSON.stringify(data), httpOptions);
  }

  public getClientes() {
    return this._http.get(this.ServiceURL);
  }
}