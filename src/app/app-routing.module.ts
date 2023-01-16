import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quemsomos', loadChildren: ()=> import('./modules/institucional/institucional.module').then(m=>m.InstitucionalModule)},
  { path: 'artigos', loadChildren: ()=> import('./modules/institucional/artigos/artigos.module').then(m=>m.ArtigosModule)},  
  { path: 'faleconosco', loadChildren: ()=> import('./modules/institucional/faleconosco/faleconosco.module').then(m=>m.FaleconoscoModule)},  
  { path: 'projetos', loadChildren: ()=> import('./modules/institucional/projetos/projetos.module').then(m=>m.ProjetosModule)},  
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
