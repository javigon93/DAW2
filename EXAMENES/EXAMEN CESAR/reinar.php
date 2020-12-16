<?php
    $ficha = [
        "director" => "John Huston",
        "producción" => "John Foreman",
        "guionistas" => array ("John Huston", "Gladys Hill"),
        "musica" => "Maurice Jarre"
    ];

    $reparto = [
        "Daniel Dravot" => "Sean Connery",
        "Peachy Carnehan" => "Michal Caine",
        "Rudyard Kipling" => "Christopher Plummer"
    ]
?>

<!DOCTYPE html>
<html>

<head>
    <title>El hombre que pudo reinar</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos/bootstrap-4.3.1/dist/css/bootstrap.min.css">
</head>

<body>
    <?php include "menu.php"?>
    <div class="container">
        <div class="row">
            <div class="col-12">
<?php

        echo "<b>director: ".$ficha['director']."</b>";
        

    /**
     * Mostrar los datos de la película
     */
?>
            </div>
        </div>
    </div>
</body>

</html>