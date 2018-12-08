import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Nice Recipe', 'from the most popular chef', 'https://purewows3.imgix.net/images/articles/2017_11/cranberry-balsamic-roast-chicken-9211.jpg?auto=format,compress&cs=strip'),
    new Recipe('Another Recipe', 'from the most unpopular chef', 'https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg')
  ];

  getRecipes() {
    /*
      returns a copied array of above recipes, this.recipe returs reference to actual array.
    */
    return this.recipes.slice();
  }
}
