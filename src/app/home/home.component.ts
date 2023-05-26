import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from "../housing-location/housing-location.component";

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
<app-housing-location> </app-housing-location>
</section>
    
`,
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, HousingLocationComponent]
})
export class HomeComponent {

}
