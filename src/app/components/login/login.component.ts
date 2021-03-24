import { LoginService } from './../../services/login.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  login: boolean = false;
  invalid: boolean = false;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  tryLogin(username: string, password: string){
    this.loginService.verifyCreds(username,password).subscribe(resp=> {
        this.login = resp.auth;
        if(this.login){
          this.router.navigate(['home']);
        }else{
          this.invalid = true;
        }
    });
  }

}