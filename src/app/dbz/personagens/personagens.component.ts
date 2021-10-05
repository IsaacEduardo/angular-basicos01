import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html'
})
export class PersonagensComponent {
  // importando componentes do modulo pai
  // @Input() personagens: Personagen[] = [];

  // tslint:disable-next-line:typedef
  get personagens() {
    return this.dbzServie.personagens;
  }
  constructor(private dbzServie: DbzService) {

  }

}
