const express = require('express');
const app = express();

const persona = {
  nombre: 'Kamilo',
  apellidos: 'Topinski',
  edad: 25
};

app.get('/nombre/:valor', (req, res) => {
  persona.nombre = req.params.valor;
  res.send(persona);
});

app.get('/apellidos/:valor', (req, res) => {
  persona.apellidos = req.params.valor;
  res.send(persona);
});

app.get('/edad/:valor', (req, res) => {
  persona.edad = Number(req.params.valor);
  res.send(persona);
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));