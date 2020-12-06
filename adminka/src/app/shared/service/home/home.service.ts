import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }

  setSlider(data: any){
    return  this.http.post(`${this.globalService.url}/slider-img`,data)
  }
}
