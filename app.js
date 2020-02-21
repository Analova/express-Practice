
var express = require("express");
var tododController = require("./contollers/todoController");

var app = express();

// set up template engine
app.set("view engine", "ejs");

// static file
app.use(express.static("./public"));

// fire controllers
tododController(app);

app.listen(3000);
console.log("You are listening to port 3000");
