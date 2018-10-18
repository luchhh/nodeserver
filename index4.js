var http = require('http');

var server = http.createServer(function (req, res) {
    let body = [];
    
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        // en este punto body tiene todo el cuerpo de la petición como string
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Mensaje Recibido!<br>');
        res.write('Body:'+body+"<br>");
        res.end();
    }).on('error', (err) => {
        // Imprimimos el error en `stderr`.
        console.error(err.stack);
    });
});

server.listen(8080);
console.log("Escuchando en http://localhost:8080/");

/**
 * Se puede utilizar la librería 
 * https://www.npmjs.com/package/body
 * 
 * para simplificar un poco el código de streams
 */