const modeloServicio = require('../models/servicio.model')

exports.listar = async (req, res) => {
    try {
        const servicios = await modeloServicio.find();
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


exports.consultarId = async (req, res) => {
    try {
        const servicios = await modeloServicio.find({nombre:req.params.nombre});
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.registrar = async (req, res) => {
    try {
        let servicioNuevo = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            duracionMinutos: req.body.duracionMinutos,
            precio: req.body.precio,
            categoria: req.body.categoria
        }
        const servicios = await modeloServicio.insertOne(servicioNuevo);
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.actualizar = async (req, res) => {
    try {
        let servicioNuevo = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            duracionMinutos: req.body.duracionMinutos,
            precio: req.body.precio,
            categoria: req.body.categoria
        }
        const servicios = await modeloServicio.updateOne(
            {nombre: req.params.nombre},
            {$set: servicioNuevo}
        );
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.eliminar = async (req, res) => {
    try {
        const servicios = await modeloServicio.deleteOne({nombre:req.params.nombre});
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

