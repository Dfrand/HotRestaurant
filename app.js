//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Sets up Express Server
var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});