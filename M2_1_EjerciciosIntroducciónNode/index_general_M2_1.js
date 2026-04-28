// 1
const hola = "Hola Mundo";

console.log(hola);

// 2
const nombre = "mi nombre es Carlos";

console.log("Hola, " + nombre);

// 3
const exactMath = require("exact-math");

console.log(
  exactMath.add(789, 34, 250443),
  exactMath.sub(2059, 79),
  exactMath.mul("3.24", "97.856"),
  exactMath.div(1205, "12.002"),
);

// 4
let getmin = require("./4_random");

let num1 = parseInt(Math.random() * (100 - 0) + 0);

let num2 = parseInt(Math.random() * (100 - 0) + 0);

let show = getmin(num1, num2);

console.log(show);

// 5
let getn = require("./5");

console.log(getn())