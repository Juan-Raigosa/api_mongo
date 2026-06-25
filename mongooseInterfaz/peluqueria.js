const express = require('express')
require('dotenv').config()
const clienteController = require ('./controllers/servicios.controller')
const { default: mongoose } = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/servicios', clienteController.listar)
app.get('/servicios/:nombre', clienteController.consultarId)
app.post('/servicios/', clienteController.registrar)
app.put('/servicios/:nombre', clienteController.actualizar)
app.delete('/servicios/:nombre', clienteController.eliminar)

app.listen(process.env.PORT || 8080, '0.0.0.0', () => console.log('Servidor en puerto', process.env.PORT || 8080))