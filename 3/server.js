// Dependencies
// ===========================================================
const express = require("express");
const app = express();

// Data
// ===========================================================
const characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthm",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does the question mark indicate?
app.get("/api/:character?", function(req, res) {
  // What does this code do?
  //the question mark pulls all of the routes if you don't specify the end.
  const chosen = req.params.character;

  if (chosen) {
    //this is only going to have a value if one is chosen at the url
    console.log(chosen);

    // What does this code do?
    for (let i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    //type something but it does not equal to anything in the array
    return res.send("No character found");
  }

  // What does this code do?
  //If it doesn't have a value you would request to show the entire JSON
  return res.json(characters);
});

module.exports = app;
