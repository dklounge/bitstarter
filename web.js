var fs = require('fs');
var index = fs.readFileSync("./index.html", "utf8");
// buffer implementation is unclear,
// read http://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers

var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function (request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});