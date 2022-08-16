const http = require("http");
const fs = require("fs");

const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    const renderHTML = (path, res) => {
      fs.readFile(path, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error file not found");
        } else {
          res.write(data);
        }
        res.end();
      });
    };

    const url = req.url;

    if (url === "/about") {
      renderHTML("./about.html", res);
    } else if (url === "/project") {
      renderHTML("./project.html", res);
    } else {
      renderHTML("./index.html", res);
    }
  })
  .listen(port, () => {
    console.log(`server is lsitening on port ${port}`);
  });
