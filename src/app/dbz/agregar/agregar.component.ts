import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  
  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  
  // @Output()
  // onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(
    private dbzService: DbzService
  ) {}

  agregar() {
    if(this.nuevo.nombre.trim().length===0) {
      return;
    } 
    // else {
    //   this.personajes.push(this.nuevo);
    // }
    // console.log(this.personajes);
    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    // debugger;
    this.limpiar();
  }

  limpiar() {
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
