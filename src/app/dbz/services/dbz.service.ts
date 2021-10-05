import { Injectable } from '@angular/core';
import { Personagen } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    // tslint:disable-next-line:variable-name
    private _personagens: Personagen[] = [
        {
            nome: 'Goku',
            poder: 8500
        },
        {
            nome: 'Vegeta',
            poder: 7500
        }
    ];
    // tslint:disable-next-line:typedef
    get personagens() {
        // ...indica que é um array
        return [...this._personagens];
    }
    constructor() {
    }
    // metod para gregar personagem
    // tslint:disable-next-line:typedef
    agregarPersonagem(personagen: Personagen) {
        this._personagens.push(personagen);
    }
}
