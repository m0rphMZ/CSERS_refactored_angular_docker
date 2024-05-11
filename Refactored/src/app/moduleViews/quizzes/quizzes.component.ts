import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz.model';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getQuizzes().subscribe(
      (quizzes) => {
        this.quizzes = quizzes;
      },
      (error) => {
        console.error('Error fetching quizzes:', error);
      }
    );
  }

  navigateToQuizDetail(quizId: number) {
    this.router.navigate(['/quizzes', quizId]);
  }
}
