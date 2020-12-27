import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';
import { AboutUsService } from 'src/app/shared/service/aboutUs/about-us.service';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  photo = 'https://wowslider.com/sliders/demo-5/data/images/sweden.jpg'
  aboutData
  content
  constructor(
    private AboutUsService: AboutUsService,
    public globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.AboutUsService.getAboutUs().subscribe(e => {
      if(e['result'].length){
        this.aboutData = e['result'][0]
        this.content = this.aboutData['content' + this.globalService.leng]
      }
    })
  }

}
