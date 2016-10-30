//incorporamos modulos de la siguiente manera 
var fs = require('fs');
// importamos el modulo path quien es la encargada de las rutas en node js
var path = require('path');
// creamos la siguinte variable files para que guarde todo los archivos que tiene nuestra carpeta controllers, y colocamos la función readdirSync para que
//lea todos los archivos que esten dentro de la carpeta controller
var files = fs.readdirSync(__dirname);
// recorremos el archivo con la siguiente función
files.forEach(function(file) {
    var fileName = path.basename(file, '.js');
    // importamos el archivo e indicamos que esta en el mismo directorio ./ y con riquiere traemos los archivos
    if (fileName !== 'index') {
        exports[fileName] = require('./' + fileName);
    }
});