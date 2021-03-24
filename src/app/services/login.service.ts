import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public verifyCreds(username: string, password: string): Observable<any>{
    return this.http.post<any>('https://10bjflwba2.api.quickmocker.com/login', {username,password});
  }
}
