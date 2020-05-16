/*
* Hay 3 tipos de required
const fs = require('fs'); -> Proyecto propio de node
const fs = require('express'); -> Paquetes que no son nativos de node
const fs = require('./fs'); -> Archivos que nosotros tenemos creados en el proyecto
*/

// module Se crea de forma automatica
//console.log(module);

const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// Pasar argumentos desde consola
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv.base);
//console.log(argv.limite);


/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch( err => console.log(err));
*/


//console.log(multiplicar);
//node --help



let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .then(dataTableResp =>{ 
            console.log(dataTableResp)
        })
        .catch( err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.yellow(archivo)}`))
            .catch( err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}