var http = require('http');

//create a server object
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});//status code of 200 and object containing response headers
	//res.write('Hello World!');//Write a response to the client
	res.write(req.url);
	res.end();//end the response
}).listen(8080);//the server object listens on port 8080