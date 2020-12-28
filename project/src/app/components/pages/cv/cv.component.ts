import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CvService } from 'src/app/shared/service/cv/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  fileToUpload: File = null;
  angularForm: FormGroup;
  submitted = false;
  success = false
  imgName
  constructor(
    public formBuilder: FormBuilder,
    public cvService: CvService
  ) {
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    this.angularForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      surname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      phone: ['', Validators.compose([Validators.required])],
      education: ['', Validators.compose([Validators.required])],
      experience: ['', Validators.compose([Validators.required])],
      languages: ['', Validators.compose([Validators.required])],
      computer_skills: ['', Validators.compose([Validators.required])],
      file: ["", Validators.required]
    });
   }

   get f() { return this.angularForm.controls; }

   
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.imgName = this.fileToUpload.name
    this.angularForm.get('file').setValue('name')
    console.log(files.item(0))
  }


  ngOnInit(): void {
    
  }

  send(){
    this.submitted = true;
    if(this.angularForm.valid){
      const formData = new FormData();
      formData.append('file', this.fileToUpload, this.fileToUpload.name);
      formData.append('fileName', this.fileToUpload.name);
      formData.append('name', this.angularForm.value.name);
      formData.append('surname', this.angularForm.value.surname);
      formData.append('phone', this.angularForm.value.phone);
      formData.append('education', this.angularForm.value.education);
      formData.append('experience', this.angularForm.value.experience);
      formData.append('languages', this.angularForm.value.languages);
      formData.append('computer_skills', this.angularForm.value.computer_skills);
      formData.append('email', this.angularForm.value.email);
      this.cvService.sendCv(formData).subscribe(e => {
        this.submitted = false;
        this.success = true
        this.imgName = undefined
        setTimeout(() => {
          this.success = false
        }, 3000);
        this.angularForm.get('name').setValue('')
        this.angularForm.get('surname').setValue('')
        this.angularForm.get('phone').setValue('')
        this.angularForm.get('education').setValue('')
        this.angularForm.get('experience').setValue('')
        this.angularForm.get('languages').setValue('')
        this.angularForm.get('computer_skills').setValue('')
        this.angularForm.get('email').setValue('')
      })
    }
  }

}
