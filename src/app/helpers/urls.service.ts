import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  API = "http://localhost:50250/api/";
  constructor() { }
}
