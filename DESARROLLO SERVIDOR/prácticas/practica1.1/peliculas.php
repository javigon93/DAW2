<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <title>Películas</title>
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
            <div class="row mx-auto">

                <!-- Código PHP -->
                <div class="col-3">';
                    <a href="peliculas_ficha.php?id=1" class="custom-card">
                        <div class="card" style="width: 100%;">
                            <img class="card-img-top" src="./imgs/peliculas/1.jpg">
                            <div class="card-body">
                                <h5 class="card-title text-center font-weight-bold"> 
                                    El padrino
                                </h5>
                            </div>
                        </div>
                    </a>
                </div>
                <!-- Fin código PHP -->

            </div>
        </div>
    </body>
</html>