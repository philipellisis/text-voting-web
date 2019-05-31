import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyResultsComponent } from './components/survey-results/survey-results.component';
import { HomeComponent } from './components/home/home.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create', component: CreateSurveyComponent },
  { path: 'results', component: SurveyResultsComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
