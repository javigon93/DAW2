// Imports. Las sentencias de importación de los diferentes elementos que
// empleará el componente.
import { Component } from '@angular/core';
// 2. Decorador @Component. Con al menos, los siguientes metadatos:


@Component({
  // Selector. Que define la etiqueta html donde se renderiza el componente.
  selector: 'app-root',
  // Template. El archivo html con la vista del componente.
  templateUrl: './app.component.html',
  // Style. Con el archivo CSS con los de estilos del componente.
  styleUrls: ['./app.component.css']
})
// 3. Export de la Clase. Definición y exportación de la clase con la lógica del
// componente.
export class AppComponent {
  title = 'appCurso';
  destino: string = 'Universo';
}
