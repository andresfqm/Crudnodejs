var express = require('express');
var router = express.Router();
// creamos una variabla para auto cargar los controladores, bajamos un nivel e ingresamos a la carpeta controllers
var controllers = require('.././controllers');
/* GET home page. */
router.get('/', controllers.homecontroller.index);
//rutas para descuento
router.get('/descuento', controllers.descuentoController.getDescuento);
// llamamos a la función que creamos en descuentoController que llamamos nuevoDescuento
router.get('/nuevo', controllers.descuentoController.getnuevoDescuento);
// llamamos a la función que creamos en descuentoController que llamamos nuevodescuento
router.post('/creardescuento', controllers.descuentoController.postnuevodescuento);
// llamamos a la función que creamos en descuentoController que llamamos eliminarDescuento
router.post('/eliminardescuento', controllers.descuentoController.eliminarDescuento);
// llamamos a la función que creamos en descuentoController que llamamos modificarDescuento,
// para recibir parametros por get nececitamos colocar (/:y el nombre del parametro en este caso id)
router.get('/modificardescuento/:id', controllers.descuentoController.getmodificarDescuento);
router.post('/editar', controllers.descuentoController.postmodificarDescuento);
module.exports = router;