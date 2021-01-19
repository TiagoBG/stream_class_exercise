const promesaNode = require('fs').promises;

//ejemplo then catch

/* promesaNode.copyFile("./archivoA.txt", "./archivoB.txt")
.then(()=> console.log("Archivo copiado!!"))
.catch(()=> console.log("Copia fallida..."))
.finally(()=> console.log("Finalizado!")); */


//ejemplo async await
function metodo1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(Math.floor(Math.random()*1000));
        }, 3000);
    })
}

async function suma(){
    console.log("Resultado: ");
    const resultado = await metodo1();

    console.log(resultado);
}

suma();