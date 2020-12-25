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
  constructor(private service: ServiceService,private globalService: GlobalService) { }

  ngOnInit(): void {
    this.service.getService().subscribe(e => {
      if(e['result'])
        for(let i = 0; i < e['result'].length; i++){
          this.serviceData.push(e['result'][i])
          if(i == 3)
            break
        }
      console.log(this.serviceData)
    })  
  }

  navigate(e){
    localStorage.setItem('service', JSON.stringify(e))
  }
}
