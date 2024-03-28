const express = require("express");
const app = express();
const PORT = 3000;
const jimp = require("jimp");
const path = require('path');
const { v4: uuidv4 } = require("uuid");

//Llamado a ruta
app.listen(3000, () => {
  console.log(
    `El servidor está inicializando en el puerto http://localhost:${PORT}`
  );
});

//Midleware

app.use(express.static("views"));
app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

//Cargar imagen
app.get("/cargar", async (req, res) => {
  const { imagen } = req.query;
  const imgBn = await jimp.read(imagen);
  const id = uuidv4().slice(0, 6);
  await imgBn
    .resize(350, jimp.AUTO)
    .grayscale()
    .writeAsync(`assets/img/img-${id}.jpg`);
  res.sendFile(path.join(__dirname + `/assets/img/img-${id}.jpg`));
});
