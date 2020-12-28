import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }

  setBlog(data: any){
    return  this.http.post(`${this.globalService.url}/blog-data`,data).pipe(
      catchError(err => throwError(err))
      );
  }

  getBlog(){
    return  this.http.get(`${this.globalService.url}/blog-data`)
  }

  deleteBlog(data: any){
    return  this.http.delete(`${this.globalService.url}/blog-data/${data.id}/${data.token}/${data.fileName}`)
  }

  updateBlog(data: any){
    return  this.http.put(`${this.globalService.url}/blog-data`, data)
  }
}
