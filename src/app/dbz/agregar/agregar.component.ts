import { Component,  Input } from '@angular/core';
import { Personagen } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  //  @Input() personagens: Personagen[] = [];

  // criando obj
  @Input() novo: Personagen = {
    nome: '',
    poder: 0
  };
  // trabalhando com event emitter para output
  // tslint:disable-next-line:no-output-on-prefix
  // @Output() onNovoPersonagem: EventEmitter<Personagen> = new EventEmitter();
  constructor(private dbzService: DbzService) { }

  // tslint:disable-next-line:typedef
  agregar() {
    if (this.novo.nome.trim().length === 0) {
      return;
    }
    console.log(this.novo);
    // this.onNovoPersonagem.emit(this.novo);
    //  this.personagens.push(this.novo);
    this.dbzService.agregarPersonagem(this.novo);
    this.novo = {
      nome: '',
      poder: 0
    };

  }
}
