const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base por la cual voy a multiplicar'
            })
            .check( (argv, options)=>{
                if( isNaN(argv.b)){
                    throw 'La base tiene que ser un número'
                }
                return true;
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Indica si se debe mostrar en consola el resultado'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                describe: 'Hasta qué número se calcula la tabla' 
            })
            .argv;


module.exports = argv;