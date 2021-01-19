const fs = require('fs');
const archivo = fs.createWriteStream('datos.txt');

for(let i = 0; i<=1000000; i++){
    archivo.write('Mensaje de prueba geek');
}

archivo.end();