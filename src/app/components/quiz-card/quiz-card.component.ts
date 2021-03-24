import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {

  @Input() quizTitle!: string;
  @Input() quizId!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToQuiz(){
    this.router.navigate(['quiz'], {queryParams: {"quizId": this.quizId }});
  }

}
