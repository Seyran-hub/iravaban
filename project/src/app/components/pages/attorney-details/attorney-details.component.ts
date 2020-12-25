import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-attorney-details',
  templateUrl: './attorney-details.component.html',
  styleUrls: ['./attorney-details.component.scss']
})
export class AttorneyDetailsComponent implements OnInit {
  expertData
  constructor(private route: Router,private globalService: GlobalService) { }

  ngOnInit(): void {
    if(!JSON.parse(localStorage.getItem('expert')))
      this.route.navigate(['/home-three'])
    this.expertData = JSON.parse(localStorage.getItem('expert'))
    console.log(this.expertData)
  }

}
