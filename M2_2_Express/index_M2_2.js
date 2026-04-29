// 1
const express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1><p>Desde Express</p>");
});

app.listen(3001);

// 2

// 4
const express = require("express");
let data = require("./archivo");
const app = express;

app.get("/fuu", (req, res) => {
    res.send(greetings())
});
