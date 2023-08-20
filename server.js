const express = require('express')
const bodyParser = require('body-parser');
const run = require('./src/bd/queryteste.js')
const Query1 = require('./src/queries/query1.js')
const Query2 = require('./src/queries/query2.js')
const Query3 = require('./src/queries/query3.js')
const Query4 = require('./src/queries/query4.js')
const Query5 = require('./src/queries/query5.js')
const Query6 = require('./src/queries/query6.js')
const Query7 = require('./src/queries/query7.js')
const Query8 = require('./src/queries/query8.js')
const Query9 = require('./src/queries/query9.js')
const Query10 = require('./src/queries/query10.js')

const {login} = require('./src/Authentication/authLogic.js')
const {register} = require('./src/Authentication/authLogic.js')
const {logout} = require('./src/Authentication/authLogic.js')


const app = express()
const port = 3001

// Middleware para análise do corpo da solicitação no formato JSON
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://portalweb-srag.vercel.app')
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// Rota para obter todos os livros
app.get('/Query1', (req, res) => {
    Query1()
    .then(bdResponse =>
        res.json(bdResponse)    
    )
})

app.get('/Query2', (req, res) => {
  Query2()
  .then(bdResponse =>
      res.json(bdResponse)    
  )
})

app.get('/Query3', (req, res) => {
  Query3()
  .then(bdResponse =>
      res.json(bdResponse)    
  )
})

app.get('/Query4', (req, res) => {
  Query4()
  .then(bdResponse =>
      res.json(bdResponse)    
  )
})

app.get('/Query5', (req, res) => {
  Query5()
  .then(bdResponse =>
      res.json(bdResponse)    
  )
})

app.get('/Query6', (req, res) => {
  Query6()
  .then(bdResponse =>
      res.json(bdResponse)    
  )
})

app.get('/Query7', (req, res) => {
  Query7()
  .then(bdResponse =>
      res.json(bdResponse)    
  )
})

app.get('/Query8', (req, res) => {
  Query8()
  .then(bdResponse =>
      res.json(bdResponse)    
  )
})

app.get('/Query9', (req, res) => {
  Query9()
  .then(bdResponse =>
      res.json(bdResponse)    
  )
})

app.get('/Query10', (req, res) => {
  Query10()
  .then(bdResponse =>
      res.json(bdResponse)    
  )
})

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
