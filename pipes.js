const fs = require('fs');

const streamReader = fs.createReadStream("./archivoA.txt");
const streamWriter = fs.createWriteStream("./archivoB.txt");

//USANDO PIPES
streamReader.pipe(streamWriter);

streamReader.on("end", ()=>{
    console.log("Finalizado!")
});


//EJEMPLO INICIAL
/* let archivoCopy;

streamReader.on("data", (str)=>{
    archivoCopy = str.toString();
    console.log(archivoCopy);
    streamWriter.write(archivoCopy);
}); */

