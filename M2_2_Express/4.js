const express = require("express");
const { saludarEnExpress } = require("./archivo_4.js");

const app = express();

app.get("/saludo", (req, res) => {
  res.send(saludarEnExpress());
});

// Iniciar servidor
app.listen(3000);
