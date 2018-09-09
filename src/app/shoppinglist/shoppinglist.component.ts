import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('tomato', 5),
    new Ingredient('Potato', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
