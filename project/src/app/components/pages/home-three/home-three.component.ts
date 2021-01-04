import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.scss']
})
export class HomeThreeComponent implements OnInit {
  constructor(
    public globalService: GlobalService,
    public translate: TranslateService
    ) { 
    }

  ngOnInit(): void {
  }

  getService(data){
    localStorage.setItem('service', JSON.stringify(data))
  }

}
