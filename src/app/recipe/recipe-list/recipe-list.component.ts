import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Nice Recipe', 'from the most popular chef', 'https://purewows3.imgix.net/images/articles/2017_11/cranberry-balsamic-roast-chicken-9211.jpg?auto=format,compress&cs=strip')
  ];
  constructor() { }

  ngOnInit() {
  }

}
