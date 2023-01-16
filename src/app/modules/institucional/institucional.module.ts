import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionalRoutingModule } from './institucional-routing.module';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { FaleconoscoComponent } from './faleconosco/faleconosco.component';


@NgModule({
  declarations: [
    QuemsomosComponent,
    ArtigosComponent,
    ProjetosComponent,
    FaleconoscoComponent
  ],
  imports: [
    CommonModule,
    InstitucionalRoutingModule
  ]
})
export class InstitucionalModule { }
