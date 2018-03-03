// Dependencies
// ===========================================================
const express = require("express");
const app = express();

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});
//"/:character" = the parameters of the get request tha
//only going to call the callback if the url parameters match
//USER OR CL JavaScript sent to us
app.get("/:character", function(req, res) {
  const chosen = req.params.character;

  // What does this log?
  console.log(chosen);
  res.end();
});

module.exports = app;