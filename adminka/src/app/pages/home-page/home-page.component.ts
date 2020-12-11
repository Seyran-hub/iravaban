import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { HomeService } from 'src/app/shared/service/home/home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service/service/service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  fileToUpload: File = null;
  sliderForm
  sliderData
  modal = false
  updateForm
  listCheck = false
  serviceData = []
  constructor(
    private homeService: HomeService,    
    public formBuilder: FormBuilder,
    private globalService: GlobalService,
    private serviceService: ServiceService
  ) {
    this.serviceService.getService().subscribe(e => this.serviceData = e['result'])
    this.homeService.getSlider().subscribe(e => {
      console.log(e)
      this.sliderData = e['result']
    })

    this.updateForm = formBuilder.group({
      title_am: ["", Validators.required],
      title_en: ["", Validators.required],
      title_ru: ["", Validators.required],
      title_fr: ["", Validators.required],
      service_id: ["", Validators.required],
      id: ["", Validators.required],
    });

    this.sliderForm = formBuilder.group({
      title_am: ["", Validators.required],
      title_en: ["", Validators.required],
      title_ru: ["", Validators.required],
      title_fr: ["", Validators.required],
      service_id: [-1, Validators.required],
      file: ["", Validators.required]
    });
   }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.sliderForm.get('file').setValue('name')
  }

  sendData() {
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    formData.append('fileName', this.fileToUpload.name);
    formData.append('token',  this.globalService.token);
    formData.append('title_am',  this.sliderForm.value.title_am);
    formData.append('title_en',  this.sliderForm.value.title_en);
    formData.append('title_ru',  this.sliderForm.value.title_ru);
    formData.append('title_fr',  this.sliderForm.value.title_fr);
    formData.append('service_id',  this.sliderForm.value.service_id);
    this.homeService.setSlider(formData).subscribe(e => {
      this.sliderForm.get('title_am').setValue('')
      this.sliderForm.get('title_en').setValue('')
      this.sliderForm.get('title_ru').setValue('')
      this.sliderForm.get('title_fr').setValue('')
      this.sliderForm.get('service_id').setValue(1)
      this.homeService.getSlider().subscribe(el => {
        this.sliderData = el['result']
      })
    })
  }

  delete(el){
    let data ={
      id: el.id,
      fileName: el.img_name,
      token: this.globalService.token
    }
    this.homeService.deleteSlider(data).subscribe(e => {
      this.homeService.getSlider().subscribe(el => {
        this.sliderData = el['result']
      })
    })
  }

  editModal(data){
    this.updateForm.get('title_am').setValue(data.title_am)
    this.updateForm.get('title_en').setValue(data.title_en)
    this.updateForm.get('title_ru').setValue(data.title_ru)
    this.updateForm.get('title_fr').setValue(data.title_fr)
    this.updateForm.get('service_id').setValue(data.service_id)
    this.updateForm.get('id').setValue(data.id)
    this.modal = !this.modal
  }


  updateData(){
    let data = Object.assign(this.updateForm.value, {token: this.globalService.token})
    this.homeService.updateSlider(data).subscribe(e => {
      this.homeService.getSlider().subscribe(el => {
        this.sliderData = el['result']
        this.modal = !this.modal
      })
    })
  }
}
