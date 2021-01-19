const fs = require('fs');

var datos = "Pepito";
var bucle = 25;

const streamEscritura = fs.createWriteStream("./archivo_esc.txt");

for(let a = 0; a < bucle; a++ ){
    // datos += datos;

    streamEscritura.write(datos, res=>{
        console.log(`-------${a}`)
    });
}

fs.writeFile("./archivo_esc.txt", datos, ()=>{
    console.log("Escritura directa terminada")
});