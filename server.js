const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Seguridad total! Nginx cifra la conexión y Node procesa la lógica.');
});

app.listen(3000, () => {
  console.log('Servidor interno corriendo en el puerto 3000');
});
