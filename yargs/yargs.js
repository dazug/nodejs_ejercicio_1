const  argv  = require('yargs')
                .option('base',{
                    alias: 'b',
                    type: 'number',
                    demandOption: true,
                    describe:'Base de la tabla de multiplicar'
                })
                .option('list',{
                    alias: 'l',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                }).
                options('hasta',{
                    alias: 'h',
                    type: 'number',
                    default: 10,
                    describe:'Limite de la tabla de multiplicar'
                }).
                options('desde',{
                    alias: 'd',
                    type: 'number',
                    default: 1,
                    describe:'Desde que numero empieza la tabla de multiplicar'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.base )){
                        throw 'La base debe ser un número'
                    }
                    if( isNaN(argv.hasta)){
                        throw 'Hasta debe ser un número'
                    }
                    if( isNaN(argv.hasta)){
                        throw 'Desede debe ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;