import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../../models/quiz.model';
import { QuizQuestion } from '../../models/quiz-question.model';
import { QuizService } from '../../services/quiz.service';
import { QuizQuestionService } from '../../services/quiz-question.service';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  quiz: Quiz | null = null;
  questions: QuizQuestion[] = [];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private questionService: QuizQuestionService
  ) { }

  ngOnInit() {
    this.loadQuiz();
  }

  loadQuiz() {
    // Extract the quiz ID from the route parameter
    const quizId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the quiz details using the quizService
    this.quizService.getQuizById(quizId).subscribe(
      (quiz) => {
        this.quiz = quiz;
        // If quiz is fetched successfully, load associated questions
        this.loadQuestionsForQuiz(quizId);
      },
      (error) => {
        console.error('Error fetching quiz details:', error);
      }
    );
  }

  loadQuestionsForQuiz(quizId: number) {
    // Fetch the questions associated with the specified quiz ID
    this.questionService.getQuestionsByQuizId(quizId).subscribe(
      (questions) => {
        this.questions = questions;
      },
      (error) => {
        console.error('Error fetching questions for quiz:', error);
      }
    );
  }
}
