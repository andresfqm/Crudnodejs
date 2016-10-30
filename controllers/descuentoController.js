//importamos el modulo de mysql y lo guardamos dentro de la variable mysql
var mysql = require('mysql');
// importamos el mdulo de fechas para cuando necesitamos trabajar con fechas, dejo comentado el codigo de fechas ya que en la tabla que estoy
//trabajando no maneja fechas pero donde maneje fechas se puede utilizar
//var dateFormat = require('dateformat');
//descuento controller
module.exports = {
    getDescuento: function(req, res, next) {
        // importaremos el modulo que creamos anteriormente,el modulo de configuracion a la base de datos config
        var config = require('.././database/config');
        // creamos una variable y le pasamos la configuracón que tenemos en el objeto JSON
        var db = mysql.createConnection(config);
        // abrimos nuestra conexión a la base de datos
        db.connect();
        // creamos una variable que llamamos descuento y la inicializamos en null
        var descuento = null;
        // creamos nuestra consulta de la tabla de descuento, creamos una función con los parametros err,rows y fields
        //err - nos sirve para el caso de que haya un error
        //rows - nos sirve para mostrar lo que nos devolvio la consulta
        //fields - nos sir
        db.query('SELECT * FROM tbl_descuento', function(err, rows, fields) {
            //creamos un if para indicar si hay un error lanzaremos una execption con throw
            if (err) throw err;
            // almacenamos en la variable descuento el resultado que nos arrojo la base de datos
            descuento = rows;
            // cerramos la conexión a la base de datos
            db.end();
            // renderizamos la vista productos pasandole el parametro que llamamos descuento con los productos que se llenaron en la consulta anterior
            res.render('descuento/descuento', {
                descuento: descuento
            });
        });
    },
    // creamos una función para crear un nuevo descuento
    getnuevoDescuento: function(req, res, next) {
        // renderizamos una vista que se encontrara en la carpeta de vistas 'descuento', la llamaremos nuevo
        res.render('descuento/nuevo')
    },
    postnuevodescuento: function(req, res, next) {
        // aqui vamos arealizar el codigo para obtener la fecha del servidor, pero como indique en la importación del modulo de la fecha
        // lo dejare comentado
        // var fechaactual = new Date();
        // var fecha = dateFormat(fechaactual, 'yyyy-mm-dd h:MM:ss');
        // creamos un objeto JSON donde pasamos los campos de la base de datos talcual como estan escrito en la base de datos
        var descuento = {
                ID_DESCUENTO: req.body.id_descuento,
                DESCUENTO: req.body.descuento,
                CANTIDAD_MINIMA: req.body.cantidad_minima
            }
            //console.log(descuento);
            // abrimos nuestra conección a la base de datos
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        // realizamos un insert a la tbl_descuento donde pasamos los valores registrados en la variable descuento en nuestro objeto JSON
        // pasamos la fucion de errores y confirmacion
        db.query('INSERT INTO tbl_descuento SET ?', descuento, function(err, rows, fields) {
            // creamos un if para indicar que si hubo un error en la consulta nos muestre el error
            if (err) throw err;
            // finalizamos la xonexión a la base de datos
            db.end();
        });
        // como respuesta renderizamos la vista nuevo y le pasamos información en este caso pasamos un info 
        //indicando que el Descuento fue creado correctamente
        res.render('descuento/nuevo', {
            info: 'Descuento creado correctamente'
        });
    },
    // craemos nuestra funcion para eliminar productos
    eliminarDescuento: function(req, res, next) {
        // recibimos un id en la petición y la guardamos en la variable id
        var id = req.body.id;
        //realizamos la conexión a la base de datos
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        // creamos una variable en este caso la llamamos respuesta, la inicializamos en false
        var respuesta = {
            res: false
        };
        // creamos nuestra consulta
        db.query('DELETE FROM tbl_descuento WHERE id_descuento = ?', id, function(err, rows, flields) {
            if (err) {
                throw err;
            }
            // cerramos la conexión
            db.end();
            // pasamos un objeto json con el parametro respuesta que en este caso seria true
            respuesta.res = true;
            res.json(respuesta);
        });
    },
    getmodificarDescuento: function(req, res, next) {
        // acontinuación recibimos una id por medio de un parametro get, enviamos una vista del producto que queremos modificar
        // cuando embiamos parametros por get se envian por medio de la variabla 'params', llamamos al parametro id
        var id = req.params.id;
        //console.log(id);
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        var descuento = null;
        db.query('SELECT * FROM tbl_descuento WHERE ID_DESCUENTO = ?', id, function(err, rows, fields) {
            if (err) throw err;
            descuento = rows;
            db.end();
            res.render('descuento/modificar', {
                descuento: descuento
            });
        });
    },
    postmodificarDescuento: function(req, res, next) {
        var descuento = {
            DESCUENTO: req.body.descuento,
            CANTIDAD_MINIMA: req.body.cantidad_minima
        };
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        db.query('UPDATE tbl_descuento SET ? WHERE ?', [descuento, {
            id_descuento: req.body.descuentoID
        }], function(err, rows, fields) {
            if (err) throw err;
            db.end();
        });
        res.redirect('/descuento');
    }
}