const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.send('backend en WSL con Ubuntu');
});
app.listen(3000, () => {
 console.log('Servidor corriendo en el puerto 3000');
});