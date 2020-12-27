import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { ContactUsService } from './shared/service/contactUs/contact-us.service';
import { GlobalService } from './shared/service/global/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare let $: any;


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    location: any;
    routerSubscription: any;
    contactData
    phone
    email
    public contactForm: FormGroup;
    submitted = false;
    success = false
    close = true
    constructor(private router: Router,
        private contactService: ContactUsService,
    public globalService: GlobalService,
    public formBuilder: FormBuilder) {
        let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

      this.contactForm = formBuilder.group({
        fullName: ['', Validators.compose([Validators.required])],
        phone: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
        subject: ['', Validators.compose([Validators.required])],
        description: ['', Validators.compose([Validators.required])],
      });
    }

    ngOnInit(){
        this.recallJsFuntions();
        this.contactService.getContactUs().subscribe(e => {
            if(e['result'].length){
              this.contactData = e['result'][0]
              this.phone =`tel:${this.contactData.phone}`
              this.email =`mailto:${this.contactData.email}`
            }
          })
    }

    get f() { return this.contactForm.controls; }

    send(){
        this.submitted = true;
        if(this.contactForm.valid){
          let data = {
            to: this.contactData.email,
            subject: this.contactForm.value.subject,
            html: `<p>Fullname: ${this.contactForm.value.fullName}<p>
                  <h2>Email: ${this.contactForm.value.email}<h2>
                  <h3>Subject: ${this.contactForm.value.subject}<h3>
                  <p>Phone: ${this.contactForm.value.phone}<p>
                  <p>Description: ${this.contactForm.value.description}<p> `
          }
    
          this.contactService.setEmail(data).subscribe(e => {
              this.success = true
              setTimeout(() => {
                this.success = false
              }, 3000);
              this.contactForm.get('fullName').setValue('')
              this.contactForm.get('email').setValue('')
              this.contactForm.get('subject').setValue('')
              this.contactForm.get('description').setValue('')
              this.contactForm.get('phone').setValue('')
              this.submitted = false;
          })
        }
      }

    recallJsFuntions() {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationStart ) {
                $('.loader').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            $.getScript('../assets/js/custom.js');
            $('.loader').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}