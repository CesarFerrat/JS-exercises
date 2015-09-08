var Game = require("./game.js")
var Room = require("./room.js")

var rooms = 
	{"2,0": new Room({text: "You are in a room full of strangers. Naked. There is a (safe) trapdoor to the north.", end: false}),
	"2,1": new Room({text: "You are in a library. You feel a breeze from the north. You smell tacos to the east.", end: false}),
	"3,1": new Room({text: "You are in a mexican restaurant. Try any direction.", end: false}),
	"4,1": new Room({text: "A black hole appears (you can't see it). You are turned into molecular spaghetti.", end: true}),
	"0,2": new Room({text: "You are surrounded by treasure. And a PS4. You start playing Bloodborne", end: true}),
	"2,2": new Room({text: "You smell pizza but all you see is a bunch of clay statues with chef hats. The smell is coming from the north.", end: false}),
	"0,3": new Room({text: "You find yourself in a luxury apartment. Is that a real tiger? It is... You see a glow from a door to the south.", end: false}),
	"1,3": new Room({text: "You are in the kitchen. The chefs are trying to turn you into a clay statue. They seem to be avoiding the door to the West.", end: false}),
	"2,3": new Room({text: "You are in a pizzeria. Nobody is taking your order. The kitchen is to the West.", end: false}),
}


var game1 = new Game(rooms,"2,0")

game1.play();

// console.log("")
// console.log(game1.currentRoom())
// console.log("")

// console.log(game1.move("N"))
// console.log("")
// console.log(game1.move("N"))
// console.log("")
// console.log(game1.move("N"))
// console.log("")
// console.log(game1.move("W"))
// console.log("")
// console.log(game1.move("W"))
// console.log("")
// console.log(game1.move("S"))
// console.log("")





