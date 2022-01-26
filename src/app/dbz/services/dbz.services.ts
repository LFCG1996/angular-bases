import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {    
    private _personajes: Personaje[] = [
    {
        nombre: 'Goku',
        poder: 20000
    }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje(personaje: Personaje): void {
        this._personajes.push(personaje);
    }
}