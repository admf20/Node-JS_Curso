const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();

// const [, , arg3 = 'base=1'] = process.argv
// const [ , base = 1] = arg3.split('=')

crearArchivo(argv.b, argv.l, argv.h)
        .then(Tabla => console.log(Tabla))
        .catch(err => console.log(err))

// console.log(process.argv);
// console.log(argv);


