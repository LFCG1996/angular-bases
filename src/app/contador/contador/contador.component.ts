import { Component } from '@angular/core';

@Component ({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es <strong>{{base}}</strong></h3>
        <button (click)="acumular(-base)">-{{base}}</button>
        <span>{{contador}}</span>
        <button (click)="acumular(base)">+{{base}}</button>
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    contador: number = 10;
    base: number = 12;
    operacion(operando: string) {
        this.contador = (operando=='+')?this.contador+1:this.contador-1; 
    }
    acumular(valor: number) {
        this.contador += valor;
    }
}