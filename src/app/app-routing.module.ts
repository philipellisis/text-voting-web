import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component'
import { SurveyResultsComponent } from './components/survey-results/survey-results.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'results', component: SurveyResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
