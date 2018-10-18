var http = require('http');

var server = http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write('Hola Mundo!');
	  res.end();
});

server.listen(8080);
console.log("Escuchando en http://localhost:8080/");
