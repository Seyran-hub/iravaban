import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  lang = '_en'
  langCode = 'EN'
  constructor(
    public translate: TranslateService,
    public globalService: GlobalService
  ) {
    translate.addLangs(['_en', '_am', '_ru', '_fr']);
    if (localStorage.getItem('language')) {
      let e = JSON.parse(localStorage.getItem('language'))
      this.translate.use(e)
      this.globalService.leng = e
      this.lang = e
      if(e == '_en') this.langCode = 'EN'
      if(e == '_am') this.langCode = 'AM'
      if(e == '_ru') this.langCode = 'RU'
      if(e == '_fr') this.langCode = 'FR'

    } else {
      this.translate.use('_en')
      this.globalService.leng = '_en'
      this.lang = '_en'
      this.langCode = 'EN'
      localStorage.setItem('language', '_en')
    }

  }


  ngOnInit(): void {
  }

  onChange(e){
    console.log('sdsdsdsd')
    localStorage.setItem('language', JSON.stringify(e))
  }

}
