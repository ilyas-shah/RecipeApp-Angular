import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();

  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;

    this.addIngredient.emit(new Ingredient(ingName, ingAmount));
  }
}
