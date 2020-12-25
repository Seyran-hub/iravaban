import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { UsersService } from 'src/app/shared/service/users/users.service';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss']
})
export class ExpertsComponent implements OnInit {
  expertData
  leng
  constructor(private userService: UsersService,private globalService: GlobalService) { }

  ngOnInit(): void {
    this.leng = GlobalService
    this.userService.getUsers().subscribe(e => {
      if(e['result'])
        this.expertData = e['result']
    })
  }

  navigate(e){
    localStorage.setItem('expert', JSON.stringify(e))
  }

}
