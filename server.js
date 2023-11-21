const express = require('express');
const path = require('path');
const { Reply } = require('./services/jarvisService');

const app = express();
const port = process.env.PORT || 3001;

// Sirve los archivos estáticos de la carpeta 'build'
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// API Calls
app.post('/jarvis/response', async (req, res) => {

  try {
    const { message } = req.body;

    const response = await Reply(message)
    res.sendStatus(200).send(response);

  } catch(error) {
    console.log(error)
    res.sendStatus(500).send("Internal Server Error")
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
