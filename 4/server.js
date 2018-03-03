// Dependencies
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Data
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
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/api/:character?", function(req, res) {
  const chosen = req.params.character;
  if (chosen) {
    console.log(chosen);

    const foundCharacter = characters.find(c => c.routeName === chosen);
    if(foundCharacter) res.json(foundCharacter);
    else               res.send("No character found");
  } 
  else res.json(characters);
});

app.post("/api/new", function(req, res) {
  const newcharacter = req.body;
  console.log(newcharacter);

  characters.push(newcharacter);
  res.json(newcharacter);
});

module.exports = app;