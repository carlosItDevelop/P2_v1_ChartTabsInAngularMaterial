import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtigosComponent } from './artigos/artigos.component';
import { FaleconoscoComponent } from './faleconosco/faleconosco.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';

const routes: Routes = [
  {path: '', redirectTo: 'quemsomos', pathMatch: 'full' },
  { path: 'quemsomos', component: QuemsomosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionalRoutingModule { }
