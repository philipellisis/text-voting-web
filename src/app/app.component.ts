import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  links = [
    {name: 'Home', url: '/home'},
    {name: 'Create Survey', url: '/create'},
    {name: 'Survey Results', url: '/results'}
  ]
  selectedItem = this.links[0].name;
  listClick(event, newValue) {
    this.selectedItem = newValue.name;
}

  title = 'Survey App';
}
