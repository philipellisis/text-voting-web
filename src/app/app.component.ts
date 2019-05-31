import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  selectedItem
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        if(this.router.url == '/') {
          this.selectedItem = this.links[0].name;
        } else {
          this.links.forEach((value) => {
            if(value.url === this.router.url) {
              this.selectedItem = value.name;
            }
          })
        }
      }
    });

   }
  links = [
    {name: 'Home', url: '/home'},
    {name: 'Create Survey', url: '/create'},
    {name: 'Survey Results', url: '/results'}
  ]
  
  listClick(event, newValue) {
    this.selectedItem = newValue.name;
}

  title = 'Survey App';
}
