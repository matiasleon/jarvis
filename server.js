const express = require('express');
const path = require('path');
const { Reply } = require('./services/jarvisService');
const app = express();
const port = process.env.PORT || 3001;

// Sirve los archivos estáticos de la carpeta 'build'
app.use(express.static(path.join(__dirname, 'build')));

app.get('/jarvis/response', async (req, res) => {

  try {

    message = await Reply()
    res.sendStatus(200).send();

  } catch(error) {

  }
});


// Maneja todas las solicitudes y envía el archivo 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor React escuchando en el puerto ${port}`);
});
