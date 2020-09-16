const http = require('http'); // import modul
const bodyparser = require('body-parser');


const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Datamatikere 3. semester, i er for seje!" + request.url + request.httpVersion);
}); 

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
