import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import {WorkersService} from "./servicios/workers.service";
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { TrabajadoresBComponent } from './trabajadores-b/trabajadores-b.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    MiComponenteComponent,
    TrabajadoresComponent,
    TrabajadoresBComponent,
    InicioComponent,
    MenuComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProveedoresService, WorkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
