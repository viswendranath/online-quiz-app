import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswersTransferService {

  submittedAnswers: number[] = []; 
  constructor() { }

  public setSubmittedAnswers(ansArr: number[]){
    this.submittedAnswers = ansArr;
  }

  public getSubmittedAnswers(): number[]{
    return this.submittedAnswers;
  }
}
