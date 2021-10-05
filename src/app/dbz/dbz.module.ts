import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonagensComponent } from './personagens/personagens.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from '../dbz/services/dbz.service';


@NgModule({
  declarations: [MainPageComponent, PersonagensComponent, AgregarComponent],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // adcionando os provideres que correspondem a serviços
  providers: [
    DbzService
  ]
})
export class DbzModule { }
