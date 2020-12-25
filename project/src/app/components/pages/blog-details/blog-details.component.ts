import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  serviceData
  constructor(private route: Router,private globalService: GlobalService) { }

  ngOnInit(): void {
    if(!JSON.parse(localStorage.getItem('service')))
    this.route.navigate(['/home-three'])
  this.serviceData = JSON.parse(localStorage.getItem('service'))
  console.log(this.serviceData)
  }

}
