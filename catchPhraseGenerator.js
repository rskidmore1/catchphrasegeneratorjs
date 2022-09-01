//catchPhraseGenerator.js

function randomizer(input) {
  const randomString = input[Math.floor(Math.random() * input.length)]
  return randomString;
}

const pronouns = ["I", "He", "They", "It", "Ze"];
const verbs = ["eats", "drives", "falls", "rocks", "pulverizes"];
const noun = [
  "your mom",
  "your childhood",
  "the children of the world",
  "dirty bastard",
  "us together",
  "vs code",
];

// const fetch = require('node-fetch');
import fetch from 'node-fetch'

fetch('https://movie-quote-api.herokuapp.com/v1/quote/')
  .then(res => res.json())
  .then(text => console.log(text))

// console.log(pronouns[Math.floor(Math.random() * pronouns.length)]);
// console.log(`${randomizer(pronouns)} ${randomizer(verbs)} ${randomizer(noun)}`)
