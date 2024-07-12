const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve a aplicação React
app.use(express.static(path.join(__dirname, '../client/build')));

// Roteia todas as requisições para o React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});
