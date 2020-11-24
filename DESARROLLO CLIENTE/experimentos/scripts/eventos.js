function clicaPregunta(){

    respuesta= prompt("Dime cuantos años tienes", 18);

   nuevoElemento= document.createElement("p");
   nuevoElemento.id= `Parrafo ${respuesta}`;

   mitexto= document.createTextNode(`Hola, soy alguien de ${respuesta} años`);

   nuevoElemento.appendChild(mitexto);
    nuevoElemento.addEventListener('click', saludar);
    
   padre= document.getElementById('miBody');

   padre.appendChild(nuevoElemento);





}

function borrarElemento(){

    respuesta= prompt('Elemento a Borrar');

    elemento= document.getElementById(respuesta);

    if (elemento == null) {
        
        alert('no se encuentra ese elemento');


    }

    else{

        elemento.remove();





    }



}


function modificarElemento(){



    respuesta= prompt('Elemento a Cambiar');

    elemento= document.getElementById(respuesta);

    if (elemento == null) {
        
        alert('no se encuentra ese elemento');


    }

    else{

        textoNuevo= prompt('¿Qué texo quieres insertar ahora?')


        elementoCambiado= document.createElement('p');
        NumeroidAntiguo=obtener_valor_numerico(elemento.id);
        
        elementoCambiado.id = `Parrafo ${NumeroidAntiguo}M`
        texto= document.createTextNode(textoNuevo);
        elementoCambiado.appendChild(texto);



        elemento.parentNode.replaceChild(elementoCambiado, elemento);





    }



}


function obtener_valor_numerico($elemento) {

    //expresión regular que recoge los números de un string y los divide en valores de array.
    regex = /(\d+)/g;

    valor_numerico = $elemento.match(regex);

    return valor_numerico;
}

function saludar(){

    alert(`Soy el nodo ${this.id} y tengo el siguiente contenido ${this.textContent}`);




}