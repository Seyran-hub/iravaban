import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }

  setService(data: any){
    return  this.http.post(`${this.globalService.url}/service-data`,data).pipe(
      catchError(err => throwError(err))
      );
  }

  getService(){
    return  this.http.get(`${this.globalService.url}/service-data`)
  }

  deleteService(data: any){
    return  this.http.delete(`${this.globalService.url}/service-data/${data.id}/${data.token}/${data.fileName}`)
  }

  updateService(data: any){
    return  this.http.put(`${this.globalService.url}/service-data`, data)
  }
}
