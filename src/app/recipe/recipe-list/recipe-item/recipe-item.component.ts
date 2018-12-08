import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected: EventEmitter<any> = new EventEmitter();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelected() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
