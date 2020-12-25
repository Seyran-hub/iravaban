import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  expert
  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }

  setUser(data: any){
    return  this.http.post(`${this.globalService.url}/user-data`,data).pipe(
      catchError(err => throwError(err))
      );
  }

  getUsers(){
    return  this.http.get(`${this.globalService.url}/user-data`)
  }

  deleteUser(data: any){
    return  this.http.delete(`${this.globalService.url}/user-data/${data.id}/${data.token}/${data.fileName}`)
  }

  updateUser(data: any){
    return  this.http.put(`${this.globalService.url}/user-data`, data)
  }
}
