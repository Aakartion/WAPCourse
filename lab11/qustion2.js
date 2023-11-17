// File: webServer.js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const bigImagePath = "image/lion.jpg";

  fs.readFile(bigImagePath, (err, data) => {
    if (err) {
      console.error(`Error reading image file: ${err.message}`);
      res.statusCode = 500;
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end(data);
    }
  });
});

const port = 3000; // You can choose any available port
const host = "127.0.0.1"; // Localhost

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
