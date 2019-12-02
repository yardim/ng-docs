import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-favorite-color',
  templateUrl: './template-favorite-color.component.html',
  styleUrls: ['./template-favorite-color.component.scss']
})
export class TemplateFavoriteColorComponent implements OnInit {
  favoriteColor = '';

  constructor() { }

  ngOnInit() { }
}
