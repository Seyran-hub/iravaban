import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { UsersService } from 'src/app/shared/service/users/users.service';

@Component({
  selector: 'app-attorney',
  templateUrl: './attorney.component.html',
  styleUrls: ['./attorney.component.scss']
})
export class AttorneyComponent implements OnInit {
  expertData
  constructor(private userService: UsersService,public globalService: GlobalService,public translate: TranslateService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(e => {
      if(e['result'])
        this.expertData = e['result']
    })
  }

  navigate(e){
    localStorage.setItem('expert', JSON.stringify(e))
  }
}
