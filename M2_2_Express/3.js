const express = require("express");
const app = express();

let personas = []

app.get("/random/:max", (req, res) => {
  const max = parseInt(req.params.max);


  const randomNumber = Math.floor(Math.random() * max) + 1;

  res.json({
    max,
    random: randomNumber,
  });
});

// Iniciar servidor
app.listen(3000);
