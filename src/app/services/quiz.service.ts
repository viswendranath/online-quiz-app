import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {}

  public getQuizQuestions(quizId: string): Observable<any>{
    return this.http.get<any>("https://10bjflwba2.api.quickmocker.com/quiz", {params: {"quizId": quizId}});
  }
}
