// Dependencies
// ===========================================================
const express = require("express");

const app = express();

// Data
// ===========================================================
const yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

const darthm = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
// GET checks what the the client is looking for and response send, is what it sends.
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthm", function(req, res) {
  res.json(darthm);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

module.exports = app;
