import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hereo-tarjeta',
  templateUrl: './hereo-tarjeta.component.html',
  styles: [`
   mat-card {
    margin-top:20px;
  }
  `]
})
export class HereoTarjetaComponent {

  @Input() heroe!: Heroe;

}
