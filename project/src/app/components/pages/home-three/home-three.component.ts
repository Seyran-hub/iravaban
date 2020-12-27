import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.scss']
})
export class HomeThreeComponent implements OnInit {
  constructor(
    public globalService: GlobalService,
    ) { 
    }

  ngOnInit(): void {
  }

  getService(data){
    localStorage.setItem('service', JSON.stringify(data))
  }

}
