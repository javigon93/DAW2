import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';
import { TrabajadoresBComponent } from './trabajadores-b/trabajadores-b.component';

const routes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'trabajadores', component: TrabajadoresBComponent },
  { path: '**', component: Error404Component}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
