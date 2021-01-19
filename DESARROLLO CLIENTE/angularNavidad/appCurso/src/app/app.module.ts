import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewModeloComponent } from './view-modelo/view-modelo.component';
import { EjMetodoComponent } from './ej-metodo/ej-metodo.component';
import { EjPropertyBindingComponent } from './ej-property-binding/ej-property-binding.component';
import { EjEventBindingComponent } from './ej-event-binding/ej-event-binding.component';
import { Ej2WayBindingComponent } from './ej2-way-binding/ej2-way-binding.component';
import { EjDirectivaNgifComponent } from './ej-directiva-ngif/ej-directiva-ngif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { ArrayobjetosComponent } from './arrayobjetos/arrayobjetos.component';
import { EjdirectivangswitchComponent } from './ejdirectivangswitch/ejdirectivangswitch.component';
import { ComponentepadreComponent } from './componentepadre/componentepadre.component';
import { ComponentehijoComponent } from './componentehijo/componentehijo.component';

@NgModule({
// DECLARACIONES  son las llamadas vistas de un módulo.
// Hay 3 tipos de vistas o declaraciones, los componentes, las directivas
// y los pipes.
  declarations: [
    AppComponent,
    CopyrightComponent,
    ViewModeloComponent,
    EjMetodoComponent,
    EjPropertyBindingComponent,
    EjEventBindingComponent,
    Ej2WayBindingComponent,
    EjDirectivaNgifComponent,
    EjdirectivangstyleComponent,
    EjdirectivangclassComponent,
    EjdirectivangforComponent,
    ArrayobjetosComponent,
    EjdirectivangswitchComponent,
    ComponentepadreComponent,
    ComponentehijoComponent
  ],
//   Imports. En este apartado se indican las dependencias o paquetes
// que empleará este módulo, cuyo origen se define en las
// importaciones al inicio del archivo.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
//   • Providers. Son los servicios utilizados por el módulo, disponibles para
// todos los componentes, y que centralizan la gestión de datos o
// funciones para inyectarlos en los componentes.

  providers: [],

//   Bootstrap. Este metadato define la vista raíz de la aplicación y es
// utilizado solo por el módulo raíz. No confundir con el popular
// framework de estilos del mismo nombre.
  bootstrap: [AppComponent]
})
// 3. Y el tercer y último bloque de código, es la instrucción de exportación
// del módulo como una clase Angular, que será posteriormente
// introducido en el archivo JavaScript principal de la aplicación.
export class AppModule { }
