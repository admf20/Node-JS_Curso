const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Para mostar la tabla con -l'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Maximo de la tabla',
                    default: 10
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .check((argv, options) => {
                    if(isNaN(argv.h)){
                        throw 'El h tiene que ser un numero'
                    }
                    return true
                })
                .argv
            
module.exports = argv