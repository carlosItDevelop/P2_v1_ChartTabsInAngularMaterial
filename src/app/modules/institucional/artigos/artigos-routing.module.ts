import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtigosComponent } from './artigos.component';

const routes: Routes = [
  {path: '', redirectTo: 'artigos', pathMatch: 'full'},
  {path: 'artigos', component: ArtigosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtigosRoutingModule { }
