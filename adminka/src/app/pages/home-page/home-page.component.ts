import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { HomeService } from 'src/app/shared/service/home/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  fileToUpload: File = null;
  constructor(
    private homeService: HomeService,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload)
    this.postFile(this.fileToUpload)
  }

  uploadFileToActivity() {

  }

  postFile(fileToUpload) {
    const endpoint = 'your-destination-url';
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('fileName', fileToUpload.name);
    formData.append('token',  this.globalService.token);
    this.homeService.setSlider(formData).subscribe(e => {
      console.log(e)
    })
  }
}
