const http = require('node:http');

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('Hello from the Node.js mini project\n');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
