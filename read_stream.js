const fs = require('fs');
/* 
console.time("tiempo inicio");

for(let j =0; j<= 10; j++){
    const streamWrite = fs.createReadStream("datos.txt", {encoding: "utf-8"});
}

console.timeEnd("tiempo inicio"); */

const streamReader = fs.createReadStream("./datos.txt",{
    ecoding: "utf-8"
});

streamReader.on("open",()=>{
    console.log("Abriendo el archivo...");
}).on("data", ()=>{
    console.log("-- log data --")
}).on("close", ()=>{
    console.log("Archivo cerrado")
}).on("error", ()=>{
    console.log("Error del archivo")
});