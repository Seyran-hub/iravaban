import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/service/login/login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  Router
 } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: any
  public loginForm: any = FormGroup;

  constructor(
    private loginService: LoginService,
    public formBuilder: FormBuilder,
    private router: Router,
    ) {

    this.loginForm = formBuilder.group({
      login: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]

    });
   }



  ngOnInit(): void {

  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe((e) => {
      if(e['errMSG']){
        this.errorMessage = e['errMSG'] 
      }
      else  {
        this.errorMessage = ''
        localStorage.setItem('adminToken', JSON.stringify(e['token']))
        this.router.navigate(['/']);
      }
    })
  }

}
