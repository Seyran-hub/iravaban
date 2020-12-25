import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global/global.service';
import { UsersService } from 'src/app/shared/service/users/users.service';

@Component({
  selector: 'app-attorney',
  templateUrl: './attorney.component.html',
  styleUrls: ['./attorney.component.scss']
})
export class AttorneyComponent implements OnInit {
  expertData
  constructor(private userService: UsersService,private globalService: GlobalService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(e => {
      if(e['result'])
        this.expertData = e['result']
      console.log(e)
    })
  }

  navigate(e){
    localStorage.setItem('expert', JSON.stringify(e))
  }
}
