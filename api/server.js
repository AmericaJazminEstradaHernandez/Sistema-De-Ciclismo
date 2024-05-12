const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'roles'
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        throw err;
    }
    console.log('Conexión exitosa a la base de datos MySQL');

    // Ejecutar una consulta de prueba
    db.query('SELECT 1', (err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta de prueba:', err);
            throw err;
        }
        console.log('Consulta de prueba exitosa:', result);
    });
});

app.post('/login', (req, res) => {
    const { usuario, contraseña } = req.body;
    const query = `SELECT * FROM usuarios WHERE usuario = '${usuario}' AND contraseña = '${contraseña}'`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send('Error en el servidor');
            throw err;
        }

        if (result.length > 0) {
            res.send('Autenticación exitosa');
        } else {
            res.status(401).send('Usuario o contraseña incorrectos');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
