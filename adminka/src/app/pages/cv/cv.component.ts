import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/shared/service/cv/cv.service';
import { GlobalService } from 'src/app/shared/service/global/global.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  newCv
  cvList
  showNewCv = false
  showCvList = false
  viewCv = false
  data
  constructor(public cvService: CvService, public globalService: GlobalService) { }

  view(e, type) {
    console.log(e)
    this.viewCv = true
    this.data = e
    if (type == 1)
      this.cvService.updateCv({ id: e.id }).subscribe(e => {
        this.getData()
      })
  }

  ngOnInit(): void {
    this.getData()
  }

  delete(el) {
    let data = {
      id: el.id,
      fileName: el.img_name,
      token: this.globalService.token
    }
    this.cvService.deleteCv(data).subscribe(e => {
      this.getData()
    })
  }

  getData() {
    this.cvService.getCv().subscribe(e => {
      if (e['result'].length)
        this.newCv = e['result'].reverse()
      else
        this.newCv = undefined

    })
    this.cvService.getCvStatus().subscribe(e => {
      if (e['result'].length)
        this.cvList = e['result'].reverse()
      else
        this.cvList = undefined
    })
  }

}
