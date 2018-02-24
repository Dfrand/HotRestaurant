//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Sets up Express Server
var app = express();
var PORT = process.env.PORT || 3000;

//Arrays to hold reservation data
var reservation=[{
	name: "",
	phoneNumber: "",
	email: "",
	uniqueID: "",
}];

var waitlist=[{
	name: "",
	phoneNumber: "",
	email: "",
	uniqueID: "",
}];

//Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});