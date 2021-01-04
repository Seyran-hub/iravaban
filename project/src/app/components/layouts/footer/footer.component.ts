import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContactUsService } from 'src/app/shared/service/contactUs/contact-us.service';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactData
  phone
  email
  constructor(private contactService: ContactUsService,public globalService: GlobalService,public translate: TranslateService) { }

  ngOnInit(): void {
    this.contactService.getContactUs().subscribe(e => {
      if(e['result'].length){
        this.contactData = e['result'][0]
        this.phone =`tel:${this.contactData.phone}`
        this.email =`mailto:${this.contactData.email}`
      }
    })
  }

}
