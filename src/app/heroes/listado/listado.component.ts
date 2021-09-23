import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'IronMan', 'Viuva Negra', 'Capitão Amarica', 'Logan'];

  // tslint:disable-next-line:no-inferrable-types
  heroeApagado: string = '';
  // tslint:disable-next-line:typedef
  apagarHeroe() {
    this.heroeApagado = this.heroes.shift() || '';
    console.log(this.heroeApagado);
  }


}
