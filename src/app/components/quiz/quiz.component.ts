import { Component, OnInit } from '@angular/core';

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

  quizData: QuizQuestion[] = [];
  constructor() { }

  ngOnInit(): void {

    this.quizData = [
      {question: 'What is national animal of India', options: ['White Tiger', 'Lion', 'Cheetah', 'Bengal Tiger']},
      {question: 'What is national animal of India', options: ['White Tiger', 'Lion', 'Cheetah', 'Bengal Tiger']},
      {question: 'What is national animal of India', options: ['White Tiger', 'Lion', 'Cheetah', 'Bengal Tiger']},
      {question: 'What is national animal of India', options: ['White Tiger', 'Lion', 'Cheetah', 'Bengal Tiger']},
      {question: 'What is national animal of India', options: ['White Tiger', 'Lion', 'Cheetah', 'Bengal Tiger']}
    ];

  }

}
