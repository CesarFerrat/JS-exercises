var decode = require('./decode.js');
var superDecode = require('./super-decode.js');

words = [
    "dead",         // 0 -> 0  1st -> d
    "bygone",       // 1 -> 1  2nd -> y
    "landing",      // 2 -> 2  3rd -> n
    "cheaply",      // 3 -> 3  4th -> a
    "assumed",      // 4 -> 4  5th -> m
    "incorrectly",  // 5 -> 0  1st -> i
    "attention",    // 6 -> 1  2nd -> t
    "agent"         // 7 -> 2  3rd -> e
];

var message = decode(words);

if (message === "dynamite") {
  console.log("We got dynamite. BOOM!");
} else {
  console.log("We done f'ed up. Got " + message + ".");
}


var sentence = "Fill the proper tank for the cow.";
var message = superDecode(sentence, "even-backwards");

if (message === "cool") {
  console.log("We got cool. BOOM!");
} else {
  console.log("We done f'ed up. Got " + message + ".");
}


sentence = "January lacks caveats hazardous DOORS crying arrogantly climate proponent rebuttal."
message = superDecode(sentence);

if (message === "JavaScript") {
  console.log("We got JavaScript. BOOM!");
} else {
  console.log("We done f'ed up. Got " + message + ".");
}

var sentences = [
  ["Attack her nose under here with an itch", "backwards"],
  ["Raul Nuñez call never finished", undefined],
  ["Start rapping this or countless queasy wizards give back jay-z", "backwards"],
  ["inner peace is overrated", "even"],
  ["Fill the proper tank for the cow", "even-backwards"]
]

sentences.forEach(function (sntnc) {
  var message = superDecode(sntnc[0], sntnc[1])
  console.log(message);
});