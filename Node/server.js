const http = require("http");
const port = 3000;
const stats = require("./pcRamUsage.js");

http.createServer((req, res) => {
    var url = req.url;
    if (url === "/stats") {
      res.end(JSON.stringify(stats, null, 2)); 
    } else {
      res.write("<h1>Working</h1>");
      res.end();
    }
  }).listen(port, () =>
    console.log(`Server is running in http://localhost:${port}`)
  );