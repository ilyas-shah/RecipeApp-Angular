import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable()

export class ShoppingService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('tomato', 5),
    new Ingredient('Potato', 10)
  ];

  getIngredients() {

    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    const isIngredientAdded = this.ingredients.filter( Ing => ingredient.name === Ing.name);
    // console.log(isIngredientAdded);
    if (isIngredientAdded.length !== 0) {
      console.log('Ingredient already added');
    } else {
      this.ingredients.push(ingredient);
      this.ingredientChanged.emit(this.ingredients.slice());
    }
  }
}
