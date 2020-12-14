import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }

  setAboutUs(data: any){
    return  this.http.post(`${this.globalService.url}/about-us-data`,data).pipe(
      catchError(err => throwError(err))
      );
  }

  getAboutUs(){
    return  this.http.get(`${this.globalService.url}/about-us-data`)
  }

  deleteAboutUs(data: any){
    return  this.http.delete(`${this.globalService.url}/about-us-data/${data.id}/${data.token}/${data.fileName}`)
  }

  updateAboutUs(data: any){
    return  this.http.put(`${this.globalService.url}/about-us-data`, data)
  }
}
