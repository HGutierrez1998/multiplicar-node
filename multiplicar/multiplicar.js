const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite) => {
    return new Promise( (resolve, rejected) =>{

        if(!Number(base)){
            rejected(`Base y limite tienen que ser numeros`);
        }

        let dataTable = '';

        console.log(`===============`.green );
        console.log(`= Tabla del ${base}=`.green );
        console.log(`===============`.green );

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }



    });
}

let crearArchivo  = (base, limite) => {
    
    return new Promise ((resolve, rejected) => {

        if ( !Number(base) || !Number(limite)  ) {
            rejected(`Base y limite tienen que ser numeros`);
            return;
        }
        let dataT = '';
    
        for (let i = 1; i <= limite; i++) {
            dataT += `${base} * ${i} = ${base*i}\n`;
        }  
        
        const data = new Uint8Array(Buffer.from(dataT));
        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
          if (err)  
            rejected(err);
          else 
            resolve( `tabla-${base}-al${limite}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}