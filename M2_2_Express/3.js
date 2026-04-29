const express = require("express");
const app = express();

const personas = ["Cris", "Carlos", "Luca", "Salma", "Kamilo", "Karla"];

app.get("/persona", (req, res) => {
  res.send(personas);
});

app.get("/persona/:id", (req, res) => {
  const persona = personas[req.params.id];
  res.send(persona ?? "Persona no encontrada");
});

// Iniciar servidor
app.listen(3000);
