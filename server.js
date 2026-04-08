const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Mi app ya actualiza desde GitHub hacia EC2 correctamente.');
});

app.listen(3000, () => {
  console.log('Servidor interno corriendo en el puerto 3000');
});
