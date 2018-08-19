import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() activeLink: EventEmitter<any> = new EventEmitter();
  active: String = 'recipe';

  constructor() { }

  ngOnInit() {
  }

  onRecipesSelected() {
    this.activeLink.emit('recipe');
    this.active = 'recipe';
    // console.log(this.active);
  }

  onShoppingListSelected() {
    this.activeLink.emit('shopping');
    this.active = 'shopping';
  }
}
