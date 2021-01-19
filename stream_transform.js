const fs = require('fs');
const {Transform} = require("stream");

const streamReader = fs.createReadStream("./archivoA.txt");
const streamWriter = fs.createWriteStream("./archivoB.txt");

streamReader.setEncoding("utf-8");

const filtro = new Transform({
    writableObjectMode:true,
    transform(data, encoding, callback){
        this.push(data.toString().toUpperCase());
        callback();
    },
    final(callback){
        callback();
    }
});
console.log(filtro)

streamReader.pipe(filtro).pipe(streamWriter);