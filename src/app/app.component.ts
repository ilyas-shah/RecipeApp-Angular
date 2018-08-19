import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature: String = 'recipe';

  onSelectedFeature(feature) {
    console.log(feature);
    this.selectedFeature = feature;
  }
}
