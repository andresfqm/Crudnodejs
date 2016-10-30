// este script de jquery solo va a pertencer a la vista  desuento.jade
$(function() {
    // vamos a crear la cunción Ajax para eliminar descuento
    $('#tbl_descuento #btn-eliminar').click(function(e) {
        e.preventDefault();
        var elemento = $(this);
        var id = elemento.parent().parent().find('#ID_DESCUENTO').text();
        var confirmar = confirm('¿Desea eliminar el descuento?')
        if (confirmar) {
            $.ajax({
                url: 'http://localhost:3000/eliminardescuento',
                method: 'post',
                data: {
                    id: id
                },
                success: function(res) {
                    //console.log(res);
                    if (res.res) {
                        elemento.parent().parent().remove();
                    }
                }
            });
        }
        //alert(id);
    });
});