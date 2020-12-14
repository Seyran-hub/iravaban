import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ContactUsService } from 'src/app/shared/service/contactUs/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  fileToUpload: File = null;
  angularForm
  angularData
  modal = false
  updateForm
  listCheck = false
  htmlContent = ''
  editorConfig: AngularEditorConfig = {
    width: '905px',
    customClasses: [{
      name: 'angular-editor',
      class: 'angular-editor'
    }]
  }
  constructor(
    private contactUsService: ContactUsService,    
    public formBuilder: FormBuilder,
    private globalService: GlobalService
  ) {
    this.contactUsService.getContactUs().subscribe(e => {
      this.angularData = e['result']
    })

    this.updateForm = formBuilder.group({
      time: [""],
      date_am: ["", Validators.required],
      date_en: ["", Validators.required],
      date_ru: ["", Validators.required],
      date_fr: ["", Validators.required],
      phone: [""],
      address_am: ["", Validators.required],
      address_en: ["", Validators.required],
      address_ru: ["", Validators.required],
      address_fr: ["", Validators.required],
      emile: [""],
      lang_am: ["", Validators.required],
      lang_en: ["", Validators.required],
      lang_ru: ["", Validators.required],
      lang_fr: ["", Validators.required],
      facebook: [""],
      instagram: [""],
      linkedin: [""],
      twitter: [""],
      lat: ["", Validators.required],
      lot: ["", Validators.required],
      id: ["", Validators.required],
    });

    this.angularForm = formBuilder.group({
      time: [""],
      date_am: ["", Validators.required],
      date_en: ["", Validators.required],
      date_ru: ["", Validators.required],
      date_fr: ["", Validators.required],
      phone: [""],
      address_am: ["", Validators.required],
      address_en: ["", Validators.required],
      address_ru: ["", Validators.required],
      address_fr: ["", Validators.required],
      emile: [""],
      lang_am: ["", Validators.required],
      lang_en: ["", Validators.required],
      lang_ru: ["", Validators.required],
      lang_fr: ["", Validators.required],
      facebook: [""],
      instagram: [""],
      linkedin: [""],
      twitter: [""],
      lat: ["", Validators.required],
      lot: ["", Validators.required],
    });
   }

  ngOnInit(): void {
  }

  sendData() {
    const formData = Object.assign(this.angularForm.value,{token: this.globalService.token});
    this.contactUsService.setContactUs(formData).subscribe(e => {
      this.angularForm.get('time').setValue('')
      this.angularForm.get('date_am').setValue('')
      this.angularForm.get('date_en').setValue('')
      this.angularForm.get('date_ru').setValue('')
      this.angularForm.get('date_fr').setValue('')
      this.angularForm.get('phone').setValue('')
      this.angularForm.get('address_am').setValue('')
      this.angularForm.get('address_en').setValue('')
      this.angularForm.get('address_ru').setValue('')
      this.angularForm.get('address_fr').setValue('')
      this.angularForm.get('emile').setValue('')
      this.angularForm.get('lang_am').setValue('')
      this.angularForm.get('lang_en').setValue('')
      this.angularForm.get('lang_ru').setValue('')
      this.angularForm.get('lang_fr').setValue('')
      this.angularForm.get('facebook').setValue('')
      this.angularForm.get('instagram').setValue('')
      this.angularForm.get('linkedin').setValue('')
      this.angularForm.get('twitter').setValue('')
      this.angularForm.get('lat').setValue('')
      this.angularForm.get('lot').setValue('')
      this.contactUsService.getContactUs().subscribe(el => {
        this.angularData = el['result']
      })
    })
  }

  delete(el){
    let data ={
      id: el.id,
      fileName: el.img_name,
      token: this.globalService.token
    }
    this.contactUsService.deleteContactUs(data).subscribe(e => {
      this.contactUsService.getContactUs().subscribe(el => {
        this.angularData = el['result']
      })
    })
  }

  editModal(data){
    this.updateForm.get('time').setValue(data.time)
    this.updateForm.get('date_am').setValue(data.date_am)
    this.updateForm.get('date_en').setValue(data.date_en)
    this.updateForm.get('date_ru').setValue(data.date_ru)
    this.updateForm.get('date_fr').setValue(data.date_fr)
    this.updateForm.get('phone').setValue(data.phone)
    this.updateForm.get('address_am').setValue(data.address_am)
    this.updateForm.get('address_en').setValue(data.address_en)
    this.updateForm.get('address_ru').setValue(data.address_ru)
    this.updateForm.get('address_fr').setValue(data.address_fr)
    this.updateForm.get('emile').setValue(data.emile)
    this.updateForm.get('lang_am').setValue(data.lang_am)
    this.updateForm.get('lang_en').setValue(data.lang_en)
    this.updateForm.get('lang_ru').setValue(data.lang_ru)
    this.updateForm.get('lang_fr').setValue(data.lang_fr)
    this.updateForm.get('facebook').setValue(data.facebook)
    this.updateForm.get('instagram').setValue(data.instagram)
    this.updateForm.get('linkedin').setValue(data.linkedin)
    this.updateForm.get('twitter').setValue(data.twitter)
    this.updateForm.get('lat').setValue(data.lat)
    this.updateForm.get('lot').setValue(data.lot)
    this.updateForm.get('id').setValue(data.id)
    this.modal = !this.modal
  }


  updateData(){
    let data = Object.assign(this.updateForm.value, {token: this.globalService.token})
    this.contactUsService.updateContactUs(data).subscribe(e => {
      this.contactUsService.getContactUs().subscribe(el => {
        this.angularData = el['result']
        this.modal = !this.modal
      })
    })
  }

}
