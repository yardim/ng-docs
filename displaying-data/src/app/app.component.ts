import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <h2>My favorite hero is: {{ myHero }}</h2>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of heroes';
  myHero = 'Windstorm';
}
