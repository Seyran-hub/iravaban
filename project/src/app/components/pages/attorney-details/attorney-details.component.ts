import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsService } from 'src/app/shared/service/contactUs/contact-us.service';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-attorney-details',
  templateUrl: './attorney-details.component.html',
  styleUrls: ['./attorney-details.component.scss']
})
export class AttorneyDetailsComponent implements OnInit {
  expertData
  public contactForm: FormGroup;
  submitted = false;
  success = false
  constructor(private route: Router,
    private contactService: ContactUsService,
    public globalService: GlobalService,
    public formBuilder: FormBuilder,
    ) {
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    this.contactForm = formBuilder.group({
      fullName: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      subject: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit(): void {
    if(!JSON.parse(localStorage.getItem('expert')))
      this.route.navigate(['/home-three'])
    this.expertData = JSON.parse(localStorage.getItem('expert'))
    console.log(this.expertData)
  }

  get f() { return this.contactForm.controls; }

  send(){
    this.submitted = true;
    if(this.contactForm.valid){
      let data = {
        to: this.expertData.email,
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


}
