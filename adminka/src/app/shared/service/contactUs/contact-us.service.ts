import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }

  setContactUs(data: any){
    return  this.http.post(`${this.globalService.url}/contact-us-data`,data).pipe(
      catchError(err => throwError(err))
      );
  }

  getContactUs(){
    return  this.http.get(`${this.globalService.url}/contact-us-data`)
  }

  deleteContactUs(data: any){
    return  this.http.delete(`${this.globalService.url}/contact-us-data/${data.id}/${data.token}`)
  }

  updateContactUs(data: any){
    return  this.http.put(`${this.globalService.url}/contact-us-data`, data)
  }
}
