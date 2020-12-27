import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { ServiceService } from 'src/app/shared/service/service/service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  serviceData
  constructor(private service: ServiceService,public globalService: GlobalService) { }

  ngOnInit(): void {
    this.service.getService().subscribe(e => {
      e['result'] = e['result'].reverse()
      if(e['result'])
        this.serviceData = e['result']
    })
    
  }

  navigate(e){
    localStorage.setItem('service', JSON.stringify(e))
  }

}
