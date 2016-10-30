//creamos una función Jquery donde realizaremos las reglas correspondiente a los tipos de valores que admiten cada campo
$(function() {
    $('.form-nuevodescuento form').form({
        id_descuento: {
            identifier: 'id_descuento',
            rules: [{
                type: 'empty',
                prompt: 'Por favor ingrese un id'
            }]
        },
        descuento: {
            identifier: 'descuento',
            rules: [{
                type: 'empty',
                prompt: 'Por favor ingrese descuento'
            }, {
                type: 'number',
                prompt: 'El descuento debe ser numerico'
            }]
        },
        cantidad_minima: {
            identifier: 'cantidad_minima',
            rules: [{
                type: 'empty',
                prompt: 'Por favor ingrese la cantidad minima'
            }, {
                type: 'integer',
                prompt: 'La cantidad minima debe ingresarse en numero entero'
            }]
        }
    });
});