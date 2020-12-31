import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url = 'http://localhost:3000'
  token 
  leng = '_am'
  sliderData

  constructor(
    private http: HttpClient,
  ) {
      
    this.getSlider().subscribe(e => {
      if(e['result'].length){
        this.sliderData = e['result']
        this.sliderData.forEach((element, index) => {
          this.getServiceId({serviceId: element.service_id}).subscribe(el => {
            if(el['result'].length){
              Object.assign(this.sliderData[index], {service: el['result'][0]})
            }
          })
        });
      }
    })
   }

   
  getSlider(){
    return  this.http.get(`${this.url}/slider-data`)
  }

  getServiceId(id){
    return  this.http.post(`${this.url}/service-data-id`, id)
  }


   
}
