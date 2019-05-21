import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component'
import { SurveyResultsComponent } from './components/survey-results/survey-results.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'results', component: SurveyResultsComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
