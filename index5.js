var http = require('http');
var visitas = 0;

var server = http.createServer(function (req, res) {
	  visitas++;
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write('Hola Mundo!<br>');
	  res.write('Visitante numero '+visitas);
	  res.end();
});

server.listen(8080);
console.log("Escuchando en http://localhost:8080/");
