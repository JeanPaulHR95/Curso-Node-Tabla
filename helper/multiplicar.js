//función que realiza la multiplicación
const fs =require('fs'); // se exporta la librería para poder hacer uso del file system
const colors = require('colors');
const{resolve}=require('path');
//PRIMERA FORMA
/*const crearArchivo = (j) =>{
    const promesa = new Promise((resolve, reject)=>{
        console.log('================');
        console.log(' Tabla del: ', j);
        console.log('================');

        let salida = '';
        for (let i = 1; i<=10; i++) {
            salida += `${j} x ${i} = ${j*i}\n`; // la salida se concatena y se da un salto de línea
        }
        console.log(salida);
        fs.writeFileSync(`tabla-del-${j}.txt`, salida);

        let nombreArchivo = `Tabla del ${j}`;
        (nombreArchivo)
            ?resolve(nombreArchivo)
            :reject (`No existe ${nombreArchivo}`);

    });
    return promesa;
    
}*/
//SEGUNDA FORMA
const crearArchivo = async(j=5, listar= true, hasta=10) =>{
    try{
        
        let salida = '';
        let consola = '';
        for (let i = 1; i<=hasta; i++) {
            salida += `${j} ${'x'} ${i} ${'='} ${j*i}\n`; // la salida se concatena y se da un salto de línea
            consola += `${j} ${'x'.green} ${i} ${'='.red} ${j*i}\n`;
        }
        if(listar){
            console.log('================'.green);
            console.log(' Tabla del: ', colors.blue(j));
            console.log('================'.blue);
            console.log(consola);
        }
        
        fs.writeFileSync(`./Salida/tabla-del-${j}.txt`, salida);
        return `Tabla del ${j}`;
    } catch(err){
        throw err;
    }
  
};
 
module.exports = {
    crearArchivo
}

