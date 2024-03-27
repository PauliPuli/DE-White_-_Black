const express = require("express");
const app = express();
const PORT = 3002;
const fs = require("fs");
const jimp = require("jimp");

//Llamado a ruta
app.listen(3002, () => {
  console.log(
    `El servidor está inicializando en el puerto http://localhost:${PORT}`
  );
});



//Midleware
app.use(express.static("assets"));

app.get("/", (req, res) => {
    res.sendFile("/index.html");
  });