const fs = require('fs');
const colors = require('colors');

//Aplicando color ala consola 
const crearArchivo = async (base = 1, lista, h) => {
    try {
        
        let salida = ''
        let consola = ''

        for (let i = 1; i <=h; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
            consola += `${base} x ${i} = ${base * i}\n`
        }

        if(lista){
            
            console.log('=================='.green);
            console.log(' Tabla del:'.green, colors.blue(base));
            console.log('=================='.green);
    
            console.log(salida)    
        }

        fs.writeFileSync(`./tablas/tabla-${base}.txt`, consola)
        
        return `tabla-${base}.txt creada`.blue

    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}