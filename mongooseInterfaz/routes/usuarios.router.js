const express = require('express')
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller')
const servicioEmail = require('../services/email.service')

router.get('/usuarios', usuariosController.listar)
router.get('/usuarios/:correo', usuariosController.consultarId)
router.post('/usuarios/', usuariosController.registrar)
router.get('/usuarios', usuariosController.listar)
router.delete('/usuarios/:correo', usuariosController.eliminar)

router.post('/enviar', usuariosController.enviar)

module.exports = router;
