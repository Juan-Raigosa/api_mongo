const express = require('express')
require('dotenv').config()
const clienteController = require ('./controllers/cliente.controller');
const usuariosController = require ('./controllers/usuarios.controller');

const app = express()
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const enrutamiento = require('./routes/enrutamiento.router')
app.use('/api/v1', enrutamiento)

const usuarios = require('./routes/usuarios.router')
app.use('/api/v1', usuarios)

app.get('/clientes/form', (req, res) => res.render('pages/form'))
app.get('/clientes', clienteController.listar)
app.get('/clientes/:correo', clienteController.consultarId)
app.post('/clientes/', clienteController.registrar)
app.delete('/clientes/:correo', clienteController.eliminar)

app.listen(process.env.PORT)
