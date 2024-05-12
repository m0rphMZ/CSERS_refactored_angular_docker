import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import { TrainingContentService } from '../../services/training-content.service';
import { Quiz } from '../../models/quiz.model';
import { TrainingContent } from '../../models/training-content.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  showSuccessMessage = false; // Add this variable


  newQuizForm: FormGroup;
  trainingContents: TrainingContent[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizService,
    private trainingContentService: TrainingContentService,
    private router: Router
  ) {
    this.newQuizForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      passingScore: [70, [Validators.required, Validators.min(0)]],
      type: ['', Validators.required],
      trainingContentId: [null, Validators.required], // Add trainingContentId field to store selected training content ID
      questions: this.formBuilder.array([]) // Use FormArray to manage questions
    });
  }

  ngOnInit() {
    this.loadTrainingContents();
  }

  loadTrainingContents() {
    this.trainingContentService.getTrainingContents().subscribe(
      (contents) => {
        this.trainingContents = contents;
      },
      (error) => {
        console.error('Error fetching training contents:', error);
      }
    );
  }

  get questionsFormArray() {
    return this.newQuizForm.get('questions') as FormArray;
  }

  addQuestion() {
    this.questionsFormArray.push(this.formBuilder.group({
      text: ['', Validators.required],
      correctAnswer: ['', Validators.required],
      explanation: ['']
    }));
  }

  removeQuestion(index: number) {
    this.questionsFormArray.removeAt(index);
  }

  onSubmit() {
    if (this.newQuizForm.valid) {
      const newQuizData: Quiz = this.newQuizForm.value;

      this.quizService.createQuiz(newQuizData).subscribe(
        (createdQuiz) => {
          console.log('Quiz created successfully:', createdQuiz);

          // Show success message and redirect
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.router.navigate(['/quizzes']);
            this.showSuccessMessage = false; // Hide success message after redirect (optional)
          }, 1500); // Redirect after 1.5 seconds

          // Optionally reset the form after successful submission
          // this.newQuizForm.reset();
        },
        (error) => {
          console.error('Error creating quiz:', error);

          // Handle errors here (display an error message, etc.)
          // ... your error handling logic ...
        }
      );
    }
  }
}
