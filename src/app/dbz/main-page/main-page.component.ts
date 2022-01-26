import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje ( event: Personaje ) {
  //   this.personajes.push(event);
  // }

  constructor() {
  }
}

