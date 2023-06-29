const express = require('express');
const run = require('./src/bd/testeQuery')
const app = express();
const port = 3000;

// Middleware para análise do corpo da solicitação no formato JSON
app.use(express.json());

// Rota para obter todos os livros
app.get('/Registers', (req, res) => {
  run()
    .then(findFilter5 =>
      res.json(findFilter5)
    )
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
