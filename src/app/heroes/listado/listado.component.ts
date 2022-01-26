import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  listadoTitulo: string = 'Listado de heroes';
  heroes: string[] = ['Spiderman', 'Ironman', 'Chapulin Colorado', 'Hulk'];
  heroeBorrado?: string;  
  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop();
  }
}
