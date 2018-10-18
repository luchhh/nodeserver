var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var chunkNro = 0;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    var stream = fs.createReadStream("dist/texto_largo.txt", {encoding: 'utf8'});
    stream.on('data', (chunk) => {
        chunkNro++;
        res.write(chunk);
    });
    stream.on('end', () => {
        console.log("Nro de Chunks :"+chunkNro);
        res.end();
    });
    stream.on('error', () => {
        console.error("Aquí hubo un error "+error);
        res.end();
    });
});

server.listen(8080);
console.log("Escuchando en http://localhost:8080/");