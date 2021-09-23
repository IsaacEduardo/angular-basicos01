import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
// adicionamos em declaracoes os componentes
@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // visibilidade dos modulos
    exports: [
        ListadoComponent
    ],
    // aqui vai modulos
    imports: [
       CommonModule
    ]
})
export class HeroesModule {

}
