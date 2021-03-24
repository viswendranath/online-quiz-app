import { QuizService } from './../../services/quiz.service';
import { AnswersTransferService } from './../../services/answers-transfer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface QuizQuestion{
  question: string;
  options: string[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizData!: QuizQuestion[];
  submittedAnswers: number[] = [];
  quizId!: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private answersTransferService: AnswersTransferService,private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizId = this.activatedRoute.snapshot.queryParams['quizId'];
    this.quizService.getQuizQuestions(this.quizId).subscribe(resp => {
      this.quizData = resp;
      console.log(this.quizData[0].options);
    });
  }

  submitAnswers(){
    // console.log(this.submittedAnswers);
    this.answersTransferService.setSubmittedAnswers(this.submittedAnswers);
    // Answers are sent via answers service, chekcout above line
    this.router.navigate(['/result'], {replaceUrl: true, queryParams: {"quizId": this.quizId}});
  }

}