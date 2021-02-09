
const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (base = 5, hasta=10, listar) => {
 
    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            
            consola += `${base} ${'x'.green} ${i} ${'='.yellow} ${(i*base)}\n`;
            salida += `${base} x ${i} = ${(i*base)}\n`;

        };

        if(listar){
            console.log('==========================='.rainbow)
            console.log('        TABLA DEL '.yellow, colors.red(base))
            console.log('==========================='.rainbow)
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`,salida);


        return `tabla-${base}.txt`;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
    }