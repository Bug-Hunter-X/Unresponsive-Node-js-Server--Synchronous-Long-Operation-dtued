const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation
  const start = Date.now();
  let elapsed = 0;
  while (elapsed < 5000) {
    elapsed = Date.now() - start;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});