import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    // tslint:disable-next-line:no-inferrable-types
    nome: string = 'Ironman';
    // tslint:disable-next-line:no-inferrable-types
    idade: number = 45;

    // tslint:disable-next-line:typedef
    get nomeMaiosculo(): string {
        return this.nome.toUpperCase();
    }
    obterNome(): string {
        return `${this.nome} - ${this.idade}
    `;
    }

    alterarNome(): void {
        this.nome = 'Spiderman';
    }

    alterarIdade(): void {
        this.idade = 25;
    }
}
