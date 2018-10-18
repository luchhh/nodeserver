var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile("dist/texto.txt", "utf8", function(error, data){
        if(error){
            console.error("Aquí hubo un error: "+error);
        }else{
            console.log(data);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("Revisa la consola");
            res.end();
        }
    });
});

server.listen(8080);
console.log("Escuchando en http://localhost:8080/");