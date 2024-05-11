import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


import { AddQuizComponent } from './moduleViews/add-quiz/add-quiz.component';
import { AddTrainingcontentComponent } from './moduleViews/add-trainingcontent/add-trainingcontent.component';
import { AvailableQuizzesComponent } from './moduleViews/available-quizzes/available-quizzes.component';
import { PassQuizComponent } from './moduleViews/pass-quiz/pass-quiz.component';
import { QuizDetailComponent } from './moduleViews/quiz-detail/quiz-detail.component';
import { QuizStatisticsComponent } from './moduleViews/quiz-statistics/quiz-statistics.component';
import { QuizzesComponent } from './moduleViews/quizzes/quizzes.component';
import { TrainingcontentListComponent } from './moduleViews/trainingcontent-list/trainingcontent-list.component';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,

    HomeComponent,
     AddQuizComponent,
     AddTrainingcontentComponent,
     AvailableQuizzesComponent,
     PassQuizComponent,
     QuizDetailComponent,
     QuizStatisticsComponent,
     QuizzesComponent,
     TrainingcontentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
