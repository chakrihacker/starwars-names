let starWarsNames = require('./starwars-names.json');
let uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
}
