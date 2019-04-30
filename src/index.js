var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.set("trust proxy", true);
app.use("/", express.static("client"));
// app.use("/", function(req, res) {
//   res.send("Hello World");
// });

//create a server object:
http
  .createServer(app)
  // .createServer(function(req, res) {
  //   res.write("Hello World!"); //write a response to the client
  //   res.end(); //end the response
  // })
  .listen(8080); //the server object listens on port 8080
