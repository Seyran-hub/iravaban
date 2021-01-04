import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  serviceData
  constructor(private route: Router,public globalService: GlobalService,
    public translate: TranslateService) { }

  ngOnInit(): void {
    if(!JSON.parse(localStorage.getItem('service')))
    this.route.navigate(['/home-three'])
  this.serviceData = JSON.parse(localStorage.getItem('service'))
  }

}
