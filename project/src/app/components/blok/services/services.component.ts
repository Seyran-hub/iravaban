import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { ServiceService } from 'src/app/shared/service/service/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceData = []
  serviceById
  constructor(private service: ServiceService,public globalService: GlobalService) { }

  ngOnInit(): void {
    this.service.getServiceId({serviceId: 7}).subscribe(e => {
      console.log(e)
      if(e['result'])
        this.serviceById = e['result'][0]
    })
    this.service.getService().subscribe(e => {
      e['result'] = e['result'].reverse()
      if(e['result'])
        for(let i = 0; i < e['result'].length; i++){
          if(e['result'][i].id !== 7){
            this.serviceData.push(e['result'][i])
            if(this.serviceData.length == 4) break
          }
        }
    })  
  }

  navigate(e){
    localStorage.setItem('service', JSON.stringify(e))
  }
}
