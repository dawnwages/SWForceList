// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
const characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthm",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "view.html"));
});

// Get all characters
app.get("/all", function(req, res) {
  res.json(characters);
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:character?", function(req, res) {
  const chosen = req.params.character;
  if (chosen) {
    console.log(chosen);

    res.json(characters.find(c => c.routeName === chosen) || false);
  }
  else res.json(characters);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  const newcharacter = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});

module.exports = app;