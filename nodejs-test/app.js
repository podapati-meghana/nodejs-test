const http = require('http');
 
//const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Nodejs xxxxxx appjs');
});
 
server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
