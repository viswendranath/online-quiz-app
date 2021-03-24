import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  activeQuizzesUrl: string = 'https://10bjflwba2.api.quickmocker.com/activeQuizzes';
  completedQuizzesUrl: string = '';
  
  constructor(private http: HttpClient) { }

  public getActiveQuizzes(): Observable<any>{
    return this.http.get<any>(this.activeQuizzesUrl);
  }
}
