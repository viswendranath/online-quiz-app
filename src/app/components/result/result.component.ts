import { ResultService } from './../../services/result.service';
import { AnswersTransferService } from './../../services/answers-transfer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  submittedAnswers!: number[];
  keyAnswers!: number[];
  finScore: number = 0;
  finPer: number = 0;
  quizId!: string;

  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private answersTransferService: AnswersTransferService, private resultService :ResultService) { 
    this.submittedAnswers = this.answersTransferService.getSubmittedAnswers();
  }

  ngOnInit(): void {
    this.quizId = this.activatedRoute.snapshot.queryParams['quizId'];
    this.resultService.getKeyAnswers(this.quizId).subscribe(resp => {
      this.keyAnswers = resp;
      for(let i in this.submittedAnswers){
        console.log(this.submittedAnswers[i]);
        if(this.submittedAnswers[i] == this.keyAnswers[i]){
          this.finScore++;
        }
      }
      this.loading = false;
    });
  }

}
