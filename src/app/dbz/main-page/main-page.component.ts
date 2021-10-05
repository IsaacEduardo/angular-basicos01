import { Component } from '@angular/core';
import { Personagen } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  novo: Personagen = {
    nome: 'Maestro Roshi',
    poder: 100
  };



  constructor(private dbzService: DbzService) {

  }
}

