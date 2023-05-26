import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Houselocation} from '../houselocation'

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
@Input() houseLocation!:Houselocation; 
}
