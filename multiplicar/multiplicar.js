const fs = require('fs')

let listarTabla = (base, limite) => {
    return new Promise( (resolve, reject) => {
 
        if(!Number(base) || !Number(limite)){
            reject("Un parametro no es numero.");
            return;
        }
        let data = '';

        for( let i = 1; i <= limite; i ++ ){
            data += `${base} * ${i}  = ${ base * i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-limite${limite}.txt`, data, (err) =>{
            if(err) {
                reject(" Hubo un Error al crear el archivo")
            }else{
                resolve (`tabla-${base}-limite${limite}.txt`);
            }
        })
    })
}

let crearArchivo = (base) =>{
    return new Promise( (resolve, reject) => {
 
        if(!Number(base)){
            reject("La base no es número ");
            return;
        }
        let data = '';

        for( let i = 1; i <= 10; i ++ ){
            data += `${base} * ${i}  = ${ base * i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) =>{
            if(err) {
                reject(" Hubo un Error al crear el archivo")
            }else{
                resolve (`tabla-${base}.txt`);
            }
        })
    })
}

/*getInfo = async(base) => {
    console.log('Info')
    let archivo = await(crearArchivo(base));
    console.log(archivo)
    return archivo;
}*/
module.exports = {
    crearArchivo,
    listarTabla
}