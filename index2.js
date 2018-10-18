var http = require('http');
var {URL} = require('url'); //es equivalente a: var URL = require('url').URL;

var server = http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write('Hola Mundo!<br>');
	  res.write('Visitando URL '+req.url+"<br>");
	  url_a = new URL(req.url, "relative:///");
	  url_b = new URL(req.url, "http://example.org");
	  console.log(url_b);
	  res.end();
});

server.listen(8080);
console.log("Escuchando en http://localhost:8080/");

/**
 * var url = require('url');
 * url.parse(URL) es muy utilizado pero es un API Legacy
 */

 /**
  * Las partes de una URL pueden verse aquí:
  * 
  * ┌─────────────────────────────────────────────────────────────────────────────────────────────┐
  * │                                            href                                             │
  * ├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤
  * │ protocol │  │        auth         │        host         │           path            │ hash  │
  * │          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │
  * │          │  │                     │   hostname   │ port │ pathname │     search     │       │
  * │          │  │                     │              │      │          ├─┬──────────────┤       │
  * │          │  │                     │              │      │          │ │    query     │       │
  * "  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "
  * │          │  │          │          │   hostname   │ port │          │                │       │
  * │          │  │          │          ├──────────────┴──────┤          │                │       │
  * │ protocol │  │ username │ password │        host         │          │                │       │
  * ├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │
  * │   origin    │                     │       origin        │ pathname │     search     │ hash  │
  * ├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤
  * │                                            href                                             │
  * └─────────────────────────────────────────────────────────────────────────────────────────────┘
  *  
  *  https://nodejs.org/docs/latest/api/url.html#url_url_strings_and_url_objects
  * 
  **/

  /**
   * Objeto URLSearchParams
   * 
   * https://nodejs.org/docs/latest/api/url.html#url_class_urlsearchparams
   */
