const express = require('express');
const run = require('./src/bd/AllRegist')
const app = express();
const port = 3000;

// Middleware para análise do corpo da solicitação no formato JSON
app.use(express.json());

// Rota para obter todos os livros
app.get('/Registers', (req, res) => {
    run()
    .then(All =>
        res.json(All)    
    )
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
