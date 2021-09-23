import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

// adicionamos em declaracoes os componentes
@NgModule({
    declarations: [
        ContadorComponent
    ],
    // visibilidade dos modulos
    exports: [
        ContadorComponent
    ],
    // aqui vai modulos
    imports: [
        CommonModule
    ]
})
export class ContadorModule {

}
