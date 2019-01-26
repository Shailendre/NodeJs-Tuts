var http = require('http');
var fs = require('fs');
var ct = require('./content-type');

// created server and added handler to it
http.createServer(requestHandler).listen(3000);
console.log("Server started at 3000");

// server accepts request at / and returns index.html
// else 404 error
function requestHandler(req, res) {
    if (req.method === "GET" && req.url === "/") {
        console.log(ct.contentType.html);
        res.writeHead(200, ct.contentType.html);
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else {
        res.writeHead(404, ct.contentType.text);
        res.write("Error! " + req.url + " does not exists.");
        res.end();

    }
}

