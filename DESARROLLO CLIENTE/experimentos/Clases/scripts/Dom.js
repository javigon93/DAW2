

class Dom{

    // elemento=null;

    // constructor(nombreElemento){


    //     this.#elemento=nombreElemento;





    // }

    // get nombre(){


    //     return this.#elemento;


    // }


    // set nombre(nombreElemento){


    //     this.#elemento=nombreElemento;





    // }


      insertarProducto(img, id, nombreProducto, precio){

            mostrador=document.getElementById('mostrador');

            contenedor= document.createElement('div')
            contenedor.id= id;

            imagen= document.createElement('img');
            imagen.src=img;

            nombre= document.createTextNode("Producto: " + nombreProducto);
            precio= document.createTextNode("Precio Individual: " + precio);

            textoNombre= document.createElement('p');

            textoPrecio= document.createTextNode('p');

            mostrador.appendChild(contenedor);
            contenedor.appendChild(imagen);
            contenedor.appendChild(textoNombre);
            textoNombre.appendChild(nombre);
            contenedor.appendChild(textoPrecio);
            textoPrecio.appendChild(precio);


            





            





    }


    insertarFuncionalidad(id, funcionalidad){

        this.elemento=document.getElementById(id);
        
        if (this.elemento != null) {
            
        this.elemento.id=id;
        this.elemento.addEventListener("click",  funcionalidad);
        }

        else{

            console.log("El id no existe");

        }









    }





}