import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe/recipe.model';
import { ShoppingService } from 'src/app/shoppinglist/shoppinglist.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  addToShoppingList(ingredients: Ingredient[]) {
    // console.log(ingredients);
    ingredients.map( (ingredient: Ingredient) => {
      this.shoppingService.addIngredient(ingredient);
    });
  }
}
