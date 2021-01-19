const fs = require('fs');
const {Duplex} = require("stream");

const streamReader = fs.createReadStream("./archivoA.txt");
const streamWriter = fs.createWriteStream("./archivoB.txt");

const report = new Duplex({
    write(data, encode, callback){
        console.log(data);
        callback();
    },
    read(size){}
});

streamReader.pipe(report).pipe(streamWriter);
