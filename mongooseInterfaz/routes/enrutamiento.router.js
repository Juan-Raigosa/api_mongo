const express = require('express')
const router = express.Router();
const clienteController = require('../controllers/cliente.controller')

router.get('/formulario', clienteController.formulario)
router.get('/clientes', clienteController.listar)
router.get('/clientes/:correo', clienteController.consultarId)
router.post('/clientes/', clienteController.registrar)
router.get('/clientes', clienteController.listar)
router.delete('/clientes/:correo', clienteController.eliminar)

module.exports = router;