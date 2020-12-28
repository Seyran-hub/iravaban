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
    public globalService: GlobalService
  ) { }

  sendCv(data: any){
    return  this.http.post(`${this.globalService.url}/cv-data`,data).pipe(
      catchError(err => throwError(err))
      );
  }

}
