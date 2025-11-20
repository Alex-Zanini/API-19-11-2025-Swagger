const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' }
  ]);
});

app.get('', (req, res) => {
  res.json([
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' }
  ]);
});

app.get('/erro400', (req, res) => {
  erro(res, "Requisição inválida.", 400, "REQUISICAO_INVALIDA");
});

app.get('/erro500', (req, res) => {
  erro(res, "Erro interno do servidor.", 500, "ERRO_INTERNO");
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});