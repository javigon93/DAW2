<!DOCTYPE html>
<html>

<head>
    <title>El nombre de la rosa</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos/bootstrap-4.3.1/dist/css/bootstrap.min.css">
    
    <script src="./node_modules/jquery/dist/jquery.min.js"></script>
    <script src="rosa.js"></script>
</head>

<body>
    <?php include "menu.php"?>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <form method="GET" action="#">
                    <select name="id">
                        <option value="1">Guillermo de Baskerville</option>
                        <option value="2">Adso de Melk</option>
                        <option value="3">Bernardo Gui</option>
                        <option value="4">El abad</option>
                        <option value="5">Jorge de Burgos</option>
                    </select>
                    <input type="submit" Value="Ver" id="enviar">
                </form>
                <img src="" id="charImage">
            </div>
        </div>
    </div>
</body>
</html>