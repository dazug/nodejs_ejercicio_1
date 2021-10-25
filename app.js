const { creararchivo } = require('./helpers/multiplicar')
const argv = require('./yargs/yargs');
const colors = require('colors');
console.clear();
// console.log(process.argv);

// desde hasta tabla 
creararchivo(argv.desde,argv.hasta,argv.base, argv.list).
    then( nombrearchivo => console.log(nombrearchivo.yellow,'Creado'.green))
    .catch( err => console.log(err));