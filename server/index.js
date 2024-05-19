const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({message: "Hola desde el servidor!"});
});

app.listen(PORT, () => {
  console.log(`El servidor esta en el puerto: ${PORT}`);
});
