import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shoppinglist/ingredient.model';

@Injectable()

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Nice Recipe',
      'from the most popular chef',
      'https://purewows3.imgix.net/images/articles/2017_11/cranberry-balsamic-roast-chicken-9211.jpg?auto=format,compress&cs=strip',
      [
        new Ingredient('mushroom', 4),
        new Ingredient('tamrind', 15)
      ]
    ),
    new Recipe(
      'Another Recipe',
      'from the most unpopular chef',
      'https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
      [
        new Ingredient('pomegranate', 20),
        new Ingredient('whey', 25)
      ]
    )
  ];

  getRecipes() {
    /*
      returns a copied array of above recipes, this.recipe returs reference to actual array.
    */
    return this.recipes.slice();
  }
}
