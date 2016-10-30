// creamos una funcion
// module.exports guarda en el modulo las funciones y las va a retornar
module.exports = {
    //funciones del controlador
    index: function(req, res, next) {
        res.render('index', {
            title: 'Bienvenido al crud con node js'
        });
    }
}