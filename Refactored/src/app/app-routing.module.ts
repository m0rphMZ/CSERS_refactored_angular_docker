import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";


import { AddQuizComponent } from './moduleViews/add-quiz/add-quiz.component';
import { AddTrainingcontentComponent } from './moduleViews/add-trainingcontent/add-trainingcontent.component';
import { AvailableQuizzesComponent } from './moduleViews/available-quizzes/available-quizzes.component';
import { PassQuizComponent } from './moduleViews/pass-quiz/pass-quiz.component';
import { QuizDetailComponent } from './moduleViews/quiz-detail/quiz-detail.component';
import { QuizStatisticsComponent } from './moduleViews/quiz-statistics/quiz-statistics.component';
import { QuizzesComponent } from './moduleViews/quizzes/quizzes.component';
import { TrainingcontentListComponent } from './moduleViews/trainingcontent-list/trainingcontent-list.component';


const ROUTES: Routes = [
  //{path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},

    // Quiz Routes
    { path: 'quizzes', component: QuizzesComponent },
    { path: 'quizzes/statistics', component: QuizStatisticsComponent },
    { path: 'quizzes/:id', component: QuizDetailComponent },
    { path: 'addquiz', component: AddQuizComponent },
    { path: 'training-content', component: TrainingcontentListComponent },
    { path: 'addtrainingcontent', component: AddTrainingcontentComponent },
    { path: 'available-quizzes', component: AvailableQuizzesComponent },
    { path: 'available-quizzes/:id', component: PassQuizComponent },
    { path: "**", redirectTo: "", pathMatch: "full" },






];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
