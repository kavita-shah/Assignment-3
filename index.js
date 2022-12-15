const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type","text/html");
  fs.readFile('index.html', (err, data) => {
    if(err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  })
});



server.listen(5000, ()=> console.log("This server is up to 5000"));