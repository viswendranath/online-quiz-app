import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tryLogin(username: string, password: string){
    if(this.validCreds(username, password)){
      console.log('logged in');
      this.router.navigate(['/home'], {replaceUrl: true});
    }else{
      console.log('Wrong credentials');
    }
  }

  validCreds(username: string, password: string): boolean{
    return username == 'test' && password == '1234';
  }
}
