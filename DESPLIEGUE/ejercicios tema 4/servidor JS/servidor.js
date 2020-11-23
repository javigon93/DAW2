

const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.set('Content-Type', 'text/plain');
  response.status(200);

  if (request.header('Accept-Language').startsWith("ca-ES")) {
    response.send("Hola mon");
  } else if (request.header('Accept-Language').startsWith("en-EN")) {
    response.send("Hello World");
  }

  else {
    response.send("Hola mundo");
  }


});

app.get('/libro/3', (request, response) => {

  if (request.header("Accept").startsWith('application/json')) {
    response.set('Content-Type', 'application/json');
    response.status(200);
    if (request.header('Accept-Language').startsWith('es-ES')) {

      respuesta = {

        'titulo': "Mortadelo y Filemón",
        'autor': 'Ibáñez'
      }

      response.send(respuesta);

    }

    else if (request.header('Accept-Language').startsWith("en-EN")) {

      respuesta = {

        'title': "Mortadelio and File-mon, two stupid spies",
        'author': 'Ibáñez'

      }

      response.send(respuesta);



    }

  }

  else if (request.header('Accept').startsWith("text/xml") ) {
    response.set('Content-Type', 'text/xml');
    response.status(200);
    if (request.header('Accept-Language').startsWith('es-ES')) {

      respuesta ="<note> <Titulo>Mortadelo y Filemon</Titulo>  <autor>Ibáñez</autor> </note>"

      response.send(respuesta);

    }

    else if (request.header('Accept-Language').startsWith("en-EN")) {

       respuesta ="<note> <Titulo>Mortadelio and File-mon, two stupid spies</Titulo>  <autor>Ibáñez</autor> </note>";

      response.send(respuesta);



    }
  }

  else {
    response.status(500);
    response.send('Hubo un error');



  }


});


app.get("/libro/4", (request, response) =>{


response.set('Content-Type', 'text/plain');

    response.status(404);

  response.send("NO existe este usuario")




})


app.post('/', (request, response) => {
  response.status(200);
  response.send('Hello from post!');
});
app.delete('/', (request, response) => {
  response.status(200);
  response.send('Hello from delete!');
});
app.delete('/libro/38', (request, response) => {
  response.status(200);
  response.send('Borrado libro 38');
});
app.delete('/libro/39', (request, response) => {
  response.status(404);
  response.send('El libro 39 no existe');
});

app.listen(port, (err) => {
  console.log(`El servidor está esctuchando en el puerto número ${port}`)
})












