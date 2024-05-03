const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Ciclismo'
});

// Intentar conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida exitosamente');

    // Realizar una consulta de prueba para verificar la conexión
    connection.query('SELECT 1 + 1 AS result', (err, rows) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            return;
        }
        console.log('Consulta ejecutada exitosamente. Resultado:', rows[0].result);
    });
});

// Manejar eventos de error
connection.on('error', (err) => {
    console.error('Error en la conexión de la base de datos:', err);
});

// Cerrar la conexión cuando ya no sea necesaria
// connection.end();
