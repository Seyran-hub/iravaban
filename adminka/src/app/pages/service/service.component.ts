import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ServiceService } from 'src/app/shared/service/service/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
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
    private serviceService: ServiceService,    
    public formBuilder: FormBuilder,
    private globalService: GlobalService
  ) {
    this.serviceService.getService().subscribe(e => {
      this.angularData = e['result']
    })

    this.updateForm = formBuilder.group({
      title_am: ["", Validators.required],
      title_en: ["", Validators.required],
      title_ru: ["", Validators.required],
      title_fr: ["", Validators.required],
      content_am: ["", Validators.required],
      content_en: ["", Validators.required],
      content_ru: ["", Validators.required],
      content_fr: ["", Validators.required],
      id: ["", Validators.required],
    });

    this.angularForm = formBuilder.group({
      title_am: ["", Validators.required],
      title_en: ["", Validators.required],
      title_ru: ["", Validators.required],
      title_fr: ["", Validators.required],
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
    formData.append('title_am',  this.angularForm.value.title_am);
    formData.append('title_en',  this.angularForm.value.title_en);
    formData.append('title_ru',  this.angularForm.value.title_ru);
    formData.append('title_fr',  this.angularForm.value.title_fr);
    formData.append('content_am',  this.angularForm.value.content_am);
    formData.append('content_en',  this.angularForm.value.content_en);
    formData.append('content_ru',  this.angularForm.value.content_ru);
    formData.append('content_fr',  this.angularForm.value.content_fr);
    this.serviceService.setService(formData).subscribe(e => {
      this.angularForm.get('title_am').setValue('')
      this.angularForm.get('title_en').setValue('')
      this.angularForm.get('title_ru').setValue('')
      this.angularForm.get('title_fr').setValue('')
      this.angularForm.get('content_am').setValue('')
      this.angularForm.get('content_en').setValue('')
      this.angularForm.get('content_ru').setValue('')
      this.angularForm.get('content_fr').setValue('')
      this.serviceService.getService().subscribe(el => {
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
    this.serviceService.deleteService(data).subscribe(e => {
      this.serviceService.getService().subscribe(el => {
        this.angularData = el['result']
      })
    })
  }

  editModal(data){
    this.updateForm.get('title_am').setValue(data.title_am)
    this.updateForm.get('title_en').setValue(data.title_en)
    this.updateForm.get('title_ru').setValue(data.title_ru)
    this.updateForm.get('title_fr').setValue(data.title_fr)
    this.updateForm.get('content_am').setValue(data.content_am)
    this.updateForm.get('content_en').setValue(data.content_en)
    this.updateForm.get('content_ru').setValue(data.content_ru)
    this.updateForm.get('content_fr').setValue(data.content_fr)
    this.updateForm.get('id').setValue(data.id)
    this.modal = !this.modal
  }


  updateData(){
    let data = Object.assign(this.updateForm.value, {token: this.globalService.token})
    this.serviceService.updateService(data).subscribe(e => {
      this.serviceService.getService().subscribe(el => {
        this.angularData = el['result']
        this.modal = !this.modal
      })
    })
  }

}
