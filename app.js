

const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
var colors = require('colors');

console.clear();


//console.log('base: yargs', argv.base);
//console.log('valor de prueba:', argv.prueba);



crearArchivo(argv.b,argv.h,argv.l)
.then(nombreArchivo =>{
    console.log(nombreArchivo.cyan, 'creado'.cyan)
})
.catch(err => {
    console.log(err)
})


