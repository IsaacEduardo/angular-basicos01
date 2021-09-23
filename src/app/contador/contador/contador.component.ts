import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
         <h3>A base é: <span>5</span></h3>
        <button (click)="acomular(base)">+ {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acomular(-base)">-  {{base}}</button>
    `
})

export class ContadorComponent {
    // tslint:disable-next-line:no-inferrable-types
    public titulo: string = 'Contador App';
    // tslint:disable-next-line:no-inferrable-types
    numero: number = 10;
    // tslint:disable-next-line:no-inferrable-types
    base: number = 5;
    // criando metodo somar
    // tslint:disable-next-line:typedef
    somar() {
        this.numero += 1;
    }

    // tslint:disable-next-line:typedef
    subtrair() {
        this.numero -= 1;
    }

    // criando metodos com argumento
    // tslint:disable-next-line:typedef
    acomular(valor: number) {
        this.numero += valor;
    }

}
