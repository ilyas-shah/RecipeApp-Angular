import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    RecipeComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    // RecipeItemComponent,
    ShoppingEditComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
