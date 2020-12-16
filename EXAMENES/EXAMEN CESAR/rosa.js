

$(function () {

    $('#enviar').on('click', function (e) {
        e.preventDefault();
        console.log('Solicitando envío petición');
        $.ajax({
            type: 'POST',
            url: './api/apiRosa.php',
            dataType: 'json',
            data: $('form').serializeArray(),
            success: function () {
              console.log('Petición enviada');
            }
        }).done(function(data) {
            console.log('Datos devueltos');
            console.dir(data);
            $('#charImage').attr('src', 'imagenes/rosa/'+data[0].imagen);
        });
    })

});