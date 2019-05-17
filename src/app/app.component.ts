import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  links = [
    {name: 'Home', url: '/home'},
    {name: 'About', url: '/about'},
    {name: 'Survey Results', url: '/results'}
  ]
  selectedItem;
  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
}

  title = 'Tour of Heroes';
}
