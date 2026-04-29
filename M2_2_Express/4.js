const express = require("express");
let data = require("./archivo");
const app = express;

app.get("/fuu", (req, res) => {
    res.send(greetings())
});
