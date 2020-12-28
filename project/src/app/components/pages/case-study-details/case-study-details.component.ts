import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-case-study-details',
  templateUrl: './case-study-details.component.html',
  styleUrls: ['./case-study-details.component.scss']
})
export class CaseStudyDetailsComponent implements OnInit {
  infoData
  constructor(private route: Router,public globalService: GlobalService) { }

  ngOnInit(): void {
    if(!JSON.parse(localStorage.getItem('blog')))
      this.route.navigate(['/home-three'])
    this.infoData = JSON.parse(localStorage.getItem('blog'))
  }
}
