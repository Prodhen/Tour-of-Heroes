import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Houselocation} from '../houselocation'

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="listing">
    <img class="listing-photo" [src]="houseLocation.photo" alt="Exterior photo of {{houseLocation.name }}">
   <h2 class="listing-heading">{{houseLocation.name}}</h2>
   <p class="listing-location">{{houseLocation.city}},{{houseLocation.state}}</p>
  </section>

  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
@Input() houseLocation!:Houselocation; 
}
