import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaleconoscoComponent } from './faleconosco.component';

const routes: Routes = [
  {path: '', redirectTo: 'faleconosco', pathMatch: 'full'},
  {path: 'faleconosco', component: FaleconoscoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaleconoscoRoutingModule { }
