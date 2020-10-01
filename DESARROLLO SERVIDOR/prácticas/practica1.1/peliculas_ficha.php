<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <title>Películas | Ficha</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous">
        <link rel="stylesheet" href="./css/estilos.css">    
    </head>
    <body>
        <div class="alert alert-secondary d-flex">
            <a href="./peliculas.php" class="btn btn-dark">Películas</a>&nbsp;&nbsp;
        </div>
        <div class="container">

            <!-- Código PHP -->
            <b>Título: </b> El padrino <br />
            <b>Año: </b>1972<br />
            <b>Duración: </b>175<br />
            <b>Director: </b> Francis Ford Coppola
                <a href='./directores_ficha.php?id=1'>
                    <li>Francis Ford Coppola</li>
                </a>
            <b>Actores: </b>
                <a href='./actores_ficha.php?id=1'>
                    <li>Marlon Brando</li>
                    <li>Al Pacino</li>
                    <li>Robert Duvall</li>
                    <li>James Caan</li>
                    <li>Diane Keaton</li>
                </a>
            <!-- Fin código PHP -->

        </div>
    </body>
</html>