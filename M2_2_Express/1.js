const express = require("express")

let app = express ()

app.get("/", (req, res) =>{
    res.send("<h1>Hola Mundo</h1><p>Desde Express</p>")
})

app.listen(3001)