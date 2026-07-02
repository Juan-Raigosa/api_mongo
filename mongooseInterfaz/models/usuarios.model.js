const { version } = require('mongoose');
const mongoose = require('../config/connectiondb');

const usuariosSchema = new mongoose.Schema({
        correo: {
            type: String,
            required: true,
            unique: true
        },

        contraseña: {
            type: String,
            required: true,
            trim: true,
            minLength: 7,
        },
        rol: {
            type: String,
            default: 'invitado',
            enum: ['cliente', 'empleado', 'administrador']
        }
},
{versionKey: false});

module.exports = mongoose.model('usuarios', usuariosSchema);