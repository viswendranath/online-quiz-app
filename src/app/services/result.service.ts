import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  public getKeyAnswers(quizId: string): Observable<any>{
    return this.http.get<any>('https://10bjflwba2.api.quickmocker.com/result',{params: {"quizId": quizId}});
  }
}
