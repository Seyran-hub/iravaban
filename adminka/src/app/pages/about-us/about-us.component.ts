import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AboutUsService } from 'src/app/shared/service/aboutUs/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
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
    private aboutUsService: AboutUsService,    
    public formBuilder: FormBuilder,
    private globalService: GlobalService
  ) {
    this.aboutUsService.getAboutUs().subscribe(e => {
      this.angularData = e['result']
    })

    this.updateForm = formBuilder.group({
      content_am: ["", Validators.required],
      content_en: ["", Validators.required],
      content_ru: ["", Validators.required],
      content_fr: ["", Validators.required],
      id: ["", Validators.required],
    });

    this.angularForm = formBuilder.group({
      content_am: ["", Validators.required],
      content_en: ["", Validators.required],
      content_ru: ["", Validators.required],
      content_fr: ["", Validators.required],
      file: ["", Validators.required]
    });
   }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.angularForm.get('file').setValue('name')
  }

  sendData() {
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    formData.append('fileName', this.fileToUpload.name);
    formData.append('token',  this.globalService.token);
    formData.append('content_am',  this.angularForm.value.content_am);
    formData.append('content_en',  this.angularForm.value.content_en);
    formData.append('content_ru',  this.angularForm.value.content_ru);
    formData.append('content_fr',  this.angularForm.value.content_fr);
    this.aboutUsService.setAboutUs(formData).subscribe(e => {
      this.angularForm.get('content_am').setValue('')
      this.angularForm.get('content_en').setValue('')
      this.angularForm.get('content_ru').setValue('')
      this.angularForm.get('content_fr').setValue('')
      this.aboutUsService.getAboutUs().subscribe(el => {
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
    this.aboutUsService.deleteAboutUs(data).subscribe(e => {
      this.aboutUsService.getAboutUs().subscribe(el => {
        this.angularData = el['result']
      })
    })
  }

  editModal(data){
    this.updateForm.get('content_am').setValue(data.content_am)
    this.updateForm.get('content_en').setValue(data.content_en)
    this.updateForm.get('content_ru').setValue(data.content_ru)
    this.updateForm.get('content_fr').setValue(data.content_fr)
    this.updateForm.get('id').setValue(data.id)
    this.modal = !this.modal
  }


  updateData(){
    let data = Object.assign(this.updateForm.value, {token: this.globalService.token})
    this.aboutUsService.updateAboutUs(data).subscribe(e => {
      this.aboutUsService.getAboutUs().subscribe(el => {
        this.angularData = el['result']
        this.modal = !this.modal
      })
    })
  }

}
