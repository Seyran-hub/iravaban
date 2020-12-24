import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { UsersService } from 'src/app/shared/service/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
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
    private usersService: UsersService,
    public formBuilder: FormBuilder,
    private globalService: GlobalService
  ) {
    this.usersService.getUsers().subscribe(e => {
      this.angularData = e['result']
    })

    this.updateForm = formBuilder.group({
      name_am: ["", Validators.required],
      name_en: ["", Validators.required],
      name_ru: ["", Validators.required],
      name_fr: ["", Validators.required],
      surname_am: ["", Validators.required],
      surname_en: ["", Validators.required],
      surname_ru: ["", Validators.required],
      surname_fr: ["", Validators.required],
      facebook: [""],
      instagram: [""],
      linkedin: [""],
      twitter: [""],
      content_am: ["", Validators.required],
      content_en: ["", Validators.required],
      content_ru: ["", Validators.required],
      content_fr: ["", Validators.required],
      id: ["", Validators.required],
    });

    this.angularForm = formBuilder.group({
      name_am: ["", Validators.required],
      name_en: ["", Validators.required],
      name_ru: ["", Validators.required],
      name_fr: ["", Validators.required],
      surname_am: ["", Validators.required],
      surname_en: ["", Validators.required],
      surname_ru: ["", Validators.required],
      surname_fr: ["", Validators.required],
      facebook: [""],
      instagram: [""],
      linkedin: [""],
      twitter: [""],
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
    console.log(this.angularForm.value)
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    formData.append('fileName', this.fileToUpload.name);
    formData.append('token', this.globalService.token);
    formData.append('name_am', this.angularForm.value.name_am);
    formData.append('name_en', this.angularForm.value.name_en);
    formData.append('name_ru', this.angularForm.value.name_ru);
    formData.append('name_fr', this.angularForm.value.name_fr);
    formData.append('surname_am', this.angularForm.value.surname_am);
    formData.append('surname_en', this.angularForm.value.surname_en);
    formData.append('surname_ru', this.angularForm.value.surname_ru);
    formData.append('surname_fr', this.angularForm.value.surname_fr);
    formData.append('facebook', this.angularForm.value.facebook);
    formData.append('instagram', this.angularForm.value.instagram);
    formData.append('linkedin', this.angularForm.value.linkedin);
    formData.append('twitter', this.angularForm.value.twitter);
    formData.append('content_am', this.angularForm.value.content_am);
    formData.append('content_en', this.angularForm.value.content_en);
    formData.append('content_ru', this.angularForm.value.content_ru);
    formData.append('content_fr', this.angularForm.value.content_fr);
    this.usersService.setUser(formData).subscribe(e => {
      this.angularForm.get('name_am').setValue('')
      this.angularForm.get('name_en').setValue('')
      this.angularForm.get('name_ru').setValue('')
      this.angularForm.get('name_fr').setValue('')
      this.angularForm.get('surname_am').setValue('')
      this.angularForm.get('surname_en').setValue('')
      this.angularForm.get('surname_ru').setValue('')
      this.angularForm.get('surname_fr').setValue('')
      this.angularForm.get('facebook').setValue('')
      this.angularForm.get('instagram').setValue('')
      this.angularForm.get('linkedin').setValue('')
      this.angularForm.get('twitter').setValue('')
      this.angularForm.get('content_am').setValue('')
      this.angularForm.get('content_en').setValue('')
      this.angularForm.get('content_ru').setValue('')
      this.angularForm.get('content_fr').setValue('')
      this.usersService.getUsers().subscribe(el => {
        this.angularData = el['result']
        console.log(el)
      })
    })
  }

  delete(el) {
    console.log(el)
    let data = {
      id: el.id,
      fileName: el.img_name,
      token: this.globalService.token
    }
    this.usersService.deleteUser(data).subscribe(e => {
      this.usersService.getUsers().subscribe(el => {
        this.angularData = el['result']
      })
    })
  }

  editModal(data) {
    console.log(data)
    this.updateForm.get('name_am').setValue(data.name_am)
    this.updateForm.get('name_en').setValue(data.name_en)
    this.updateForm.get('name_ru').setValue(data.name_ru)
    this.updateForm.get('name_fr').setValue(data.name_fr)
    this.updateForm.get('surname_am').setValue(data.surname_am)
    this.updateForm.get('surname_en').setValue(data.surname_en)
    this.updateForm.get('surname_ru').setValue(data.surname_ru)
    this.updateForm.get('surname_fr').setValue(data.surname_fr)
    this.updateForm.get('facebook').setValue(data.facebook)
    this.updateForm.get('instagram').setValue(data.instagram)
    this.updateForm.get('linkedin').setValue(data.linkedin)
    this.updateForm.get('twitter').setValue(data.twitter)
    this.updateForm.get('content_am').setValue(data.content_am)
    this.updateForm.get('content_en').setValue(data.content_en)
    this.updateForm.get('content_ru').setValue(data.content_ru)
    this.updateForm.get('content_fr').setValue(data.content_fr)
    this.updateForm.get('id').setValue(data.id)
    this.modal = !this.modal
  }


  updateData() {
    let data = Object.assign(this.updateForm.value, { token: this.globalService.token })
    this.usersService.updateUser(data).subscribe(e => {
      this.usersService.getUsers().subscribe(el => {
        this.angularData = el['result']
        this.modal = !this.modal
      })
    })
  }


}
