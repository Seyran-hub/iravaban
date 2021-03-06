import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url = environment.apiUrl;
  token 


  constructor() {
    if(localStorage.getItem('adminToken')) this.token = localStorage.getItem('adminToken')
   }
}
