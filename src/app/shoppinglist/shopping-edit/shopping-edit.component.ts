import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;

    this.shoppingService.addIngredient(new Ingredient(ingName, ingAmount));
  }
}
