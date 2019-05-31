import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/survey-results-service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {
  error = false;
  success = false;
  formControls: FormControl[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    let formControl: FormControl = new FormControl('', Validators.required);
    this.formControls.push(formControl);
    this.profileForm.addControl('surveyQuestion' + this.formControls.length, formControl);
  }

  profileForm = new FormGroup({
    password: new FormControl('', Validators.required)
  })

  addControl() {
    let formControl: FormControl = new FormControl('', Validators.required);
    this.formControls.push(formControl);
    this.profileForm.addControl('surveyQuestion' + this.formControls.length, formControl);
    console.log(this.profileForm);
  }
  submit() {
    console.log(this.profileForm.value);
    let answers = [];
    let password;
    let index = 1;
    for (const [key, value] of Object.entries(this.profileForm.value)) {
      if(key === 'password') {
        password = value;
      } else {
        answers.push({'id': index.toString(), 'name': value});
        index ++;
      }
      
    }
    this.dataService
    .postAnswers<any[]>(JSON.stringify(answers), password)
    .subscribe( val => {
      console.log("POST call successful value returned in body", val);
      this.profileForm.reset();
      this.success = true;
      this.error = false;
      },
      response => {
          console.log("POST call in error", response);
          this.success = false;
          this.error = true;
      },
      () => {
          console.log("The POST observable is now completed.");
      });
    console.log(answers);
  }

}
