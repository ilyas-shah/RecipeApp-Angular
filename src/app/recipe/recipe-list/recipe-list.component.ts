import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Nice Recipe', 'from the most popular chef', 'https://purewows3.imgix.net/images/articles/2017_11/cranberry-balsamic-roast-chicken-9211.jpg?auto=format,compress&cs=strip'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Another Recipe', 'from the most unpopular chef', 'https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
