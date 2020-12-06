import { Injectable } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url = 'http://localhost:3000'
  token 
  constructor() {
    if(localStorage.getItem('adminToken')) this.token = localStorage.getItem('adminToken')
   }
}
