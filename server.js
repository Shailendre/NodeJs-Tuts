var http = require('http');


// created server and added handler to it
http.createServer(function (request, response) {
    console.log("URL : " + request.url);
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(res);
    response.end();

}).listen(3000);


var res = "{\"response\" : \"OK\"}";

console.log("Server started at 3000");
