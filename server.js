const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'assets')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
