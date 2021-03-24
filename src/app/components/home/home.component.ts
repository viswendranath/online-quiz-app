import { HomeService } from './../../services/home.service';
import { QuizService } from './../../services/quiz.service';
import { Component, OnInit } from '@angular/core';


interface QuizDetails{
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeQuizzes: QuizDetails[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    // this.homeService.getActiveQuizzes().subscribe(resp => {
    //   this.activeQuizzes = resp;
    // });
    this.activeQuizzes = [
      {
        id: '1',
        name: 'Dummy quiz'
      }
    ]
  }

}
