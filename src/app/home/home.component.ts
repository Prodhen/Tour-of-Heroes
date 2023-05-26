import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { Houselocation } from '../houselocation';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
      <section>
        <form>
          <input type="text" placeholder="Filter by city">
          <button class="primary" type="button">Search</button>
        </form>
      </section>
    <section>
    <app-housing-location [houseLocation]="houseLocation"> </app-housing-location>
    </section>
    
`,
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, HousingLocationComponent]
})

export class HomeComponent {
  houseLocation:Houselocation={
    id:9999,
    name:'Test Home',
    city:'test City',
    state:'ST',
    photo:'assets/example-house.jpj',
    availableUnits:99,
    wifi:true,
    laundry:false
  };

}
