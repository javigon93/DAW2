nombre= null;
apellido=null;
estado=null;


window.addEventListener("load", carga);

function carga(){

    arrayOpciones=["Soltero", "Casado", "Pareja de Hecho", "Divorciado"]
    salto= document.createElement('br');



    body=document.getElementById("body");
    formulario= document.createElement('form');
    inputNombre= document.createElement('input');
    inputApellido= document.createElement('input');
    inputAceptoCondiciones= document.createElement('input');
    inputAceptoCookies= document.createElement('input');
    botonEnviar= document.createElement('button');

    formulario.id= "formulario";
    formulario.name="formulario";

    inputNombre.type= "text";
    inputNombre.id= "nombre";
    inputNombre.name="text";
    inputNombre.addEventListener("change", getInfo);

    inputApellido.type= "text";
    inputApellido.id= "Apellido";
    inputApellido.name="text";
    inputApellido.addEventListener("change", getInfo);

    

    textoNombre= "Nombre: ";
    textoApellido="Apellido: ";
    


    nodotexto=document.createTextNode(textoNombre);
    nodoapellido=document.createTextNode(textoApellido);

    inputAceptoCondiciones.id="condiciones";
    inputAceptoCondiciones.type="checkbox";

    inputAceptoCookies.id="cookies";
    inputAceptoCookies.type="checkbox";


    botonEnviar.id= "botonEnviar";
    botonEnviar.innerHTML= "ENVIAR DATOS";
    botonEnviar.addEventListener("click", imprimirDatos)

    body.appendChild(formulario);
    formulario.appendChild(nodotexto);
    formulario.appendChild(inputNombre);
    formulario.appendChild(nodoapellido);
    formulario.appendChild(inputApellido);
    formulario.appendChild(salto);

    arrayOpciones.forEach(element => {
        
        radioButton=document.createElement('input');
        radioButton.className= "radio";
        radioButton.type='radio';
        radioButton.name="estadoCivil";
        radioButton.value=element;
        
      

        textoRadio= element;
        nodoRadio= document.createTextNode(textoRadio);
        
        formulario.appendChild(nodoRadio);
        formulario.appendChild(radioButton);



    });
        formulario.appendChild(inputAceptoCookies);
        formulario.appendChild(inputAceptoCondiciones);
    body.appendChild(botonEnviar);


}

function getInfo(){
    
       
    if (this.id=="nombre") {
        
        nombre= this.value;


    }

    else if (this.id== "Apellido") {
        
        apellido= this.value;


    }

    




}

function imprimirDatos(){


    radiobuttons=document.getElementsByName("estadoCivil");
    checkCondiciones= document.getElementById("condiciones");
    checkCookies= document.getElementById("cookies");
    contador=0;
    radiobuttons.forEach(element => {
        
        if (element.checked) {
            
            estado=element.value;


        }




    });


    if (nombre != null && apellido != null && estado != null && (checkCondiciones.checked && !checkCookies.checked)) {
       
        contador++;
        nuevaColumna= document.createElement('div');
        nuevaColumna.id= "columna" + contador;
        nuevaColumna.className="columna";

        nuevaLinea1= document.createElement('p');
        nuevaLinea1.innerHTML="Nombre: " + nombre + "<br>Apellido: " + apellido + "<br>Estado Civil: " + estado + "<br>Condiciones: Acceptadas";

        body.appendChild(nuevaColumna);
        nuevaColumna.appendChild(nuevaLinea1);

        text1=document.getElementById("nombre");
        text1.value="";


    }

    else if (nombre != null && apellido != null && estado != null && (!checkCondiciones.checked && checkCookies.checked)){


        contador++;
        nuevaColumna= document.createElement('div');
        nuevaColumna.id= "columna" + contador;
        nuevaColumna.className="columna";

        nuevaLinea1= document.createElement('p');
        nuevaLinea1.innerHTML="Nombre: " + nombre + "<br>Apellido: " + apellido + "<br>Estado Civil: " + estado + "<br>Cookies: Acceptadas";

        body.appendChild(nuevaColumna);
        nuevaColumna.appendChild(nuevaLinea1);

        text1=document.getElementById("nombre");
        text1.value="";





    }


    else if (nombre != null && apellido != null && estado != null && (!checkCondiciones.checked && !checkCookies.checked)){

        contador++;
        nuevaColumna= document.createElement('div');
        nuevaColumna.id= "columna" + contador;
        nuevaColumna.className="columna";

        nuevaLinea1= document.createElement('p');
        nuevaLinea1.innerHTML="Nombre: " + nombre + "<br>Apellido: " + apellido + "<br>Estado Civil: " + estado + "<br>Cookies y Condiciones: NO Acceptadas";

        body.appendChild(nuevaColumna);
        nuevaColumna.appendChild(nuevaLinea1);

        text1=document.getElementById("nombre");
        text1.value="";





    }

    else{

       alert("aLGO fALLA")


    }






}