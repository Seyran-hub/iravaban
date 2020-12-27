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
    public globalService: GlobalService
  ) { }
  getAboutUs(){
    return  this.http.get(`${this.globalService.url}/about-us-data`)
  }
}
