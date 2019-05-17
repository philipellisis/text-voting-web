import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/survey-results-service';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.css']
})
export class SurveyResultsComponent implements OnInit {

  values;
  constructor(private dataService: DataService,) { }

  ngOnInit() {
    this.dataService
    .getAll<any[]>()
    .subscribe((data: any[]) => this.values = data,
    error => () => {
        console.log('something went wrong!');
    },
    () => {
        console.log('got the data!')
        console.log(this.values);
    });
  }

}
