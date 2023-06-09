const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("REQUEST MADE");
  res.setHeader("content-Type", "text/html");
  fs.readFile("index.html", (err, data) => {
    if (err) {
      console.log(data);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening request to port 3000");
});
