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

    switch (url) {
      case "/about":
        renderHTML("./about.html", res);
        break;
      case "/project":
        renderHTML("./project.html", res);
        break;
      case "/":
        renderHTML("./index.html", res);
      default:
        renderHTML("./404.html", res);
        break;
    }
  })
  .listen(port, () => {
    console.log(`server is lsitening on port ${port}`);
  });
