import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BlogService } from 'src/app/shared/service/blog/blog.service';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {
  infoData

  constructor(private service: BlogService,public globalService: GlobalService,
    public translate: TranslateService) { }

  ngOnInit(): void {
    this.service.getBlog().subscribe(e => {
      e['result'] = e['result'].reverse()
      if(e['result'])
        this.infoData = e['result']
    })
  }

  
  navigate(e){
    localStorage.setItem('blog', JSON.stringify(e))
  }


}
