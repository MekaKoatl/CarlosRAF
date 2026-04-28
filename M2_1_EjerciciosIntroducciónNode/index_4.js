let getmin = require("./4_random");

let num1 = parseInt(Math.random() * (100 - 0) + 0);

let num2 = parseInt(Math.random() * (100 - 0) + 0);

let show = getmin(num1, num2);

console.log(show);
