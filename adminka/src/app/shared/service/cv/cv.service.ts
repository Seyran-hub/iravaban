import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }

  getCv(){
    return  this.http.get(`${this.globalService.url}/cv-data`)
  }

  getCvStatus(){
    return  this.http.get(`${this.globalService.url}/cv-data-status`)
  }

  deleteCv(data: any){
    return  this.http.delete(`${this.globalService.url}/cv-data/${data.id}/${data.token}/${data.fileName}`)
  }

  updateCv(data: any){
    return  this.http.put(`${this.globalService.url}/cv-data`, data)
  }
}
