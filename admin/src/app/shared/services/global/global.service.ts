import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url = 'http://localhost:3000'
  constructor() { }
}
