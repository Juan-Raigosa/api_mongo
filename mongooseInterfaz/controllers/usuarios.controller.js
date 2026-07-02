const modeloUsuarios = require('../models/usuarios.model')
const servicioEmail = require('../services/email.service')

exports.listar = async (req, res) => {
    try {
        const usuarios = await modeloUsuarios.find();
        res.render('pages/usuarios', {usuarios: usuarios});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.formulario =async(req,res) => {
    res.render('pages/form')
}

exports.enviar = async(req, res) => {
    const correo = req.body.correo
    const asunto = req.body.asunto
    const mensaje = req.body.mensaje
    await servicioEmail.sendEmail(correo, asunto, mensaje)
        res.render('pages/usuarios',);
}


exports.consultarId = async (req, res) => {
    try {
        const usuarios = await modeloUsuarios.find({email:req.params.correo});
        res.redirect('/api/');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.registrar = async (req, res) => {
    try {
        let usuariosNuevo = {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }
        const usuarios = await modeloUsuarios.create(usuariosNuevo);
        res.render('pages/form');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.actualizar = async (req, res) => {
    try {
        let usuariosNuevo = {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }
        const usuarios = await modeloUsuarios.updateOne(
            {email: req.params.correo},
            {$set: usuariosNuevo}
        );
        res.redirect('/clientes');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.eliminar = async (req, res) => {
    try {
        const usuarios = await modeloUsuarios.deleteOne({email:req.params.correo});
        res.redirect('/clientes');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
