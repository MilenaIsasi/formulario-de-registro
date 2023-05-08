const mongoose = require ('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [true, "El campo de nombre es obligatorio"],
    },
    apellido:{
        type:String,
        required: [true, "El campo de apellido es obligatorio"],

    },
    email: {
        type: String,
        required: [true, "El campo email es obligatorio"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Por favor introduzca una dirección de correo electrónico válida"
        }
    },
    documentoIdentidad: {
        type: String,
        required: [true, "El campo Documento de Identidad es obligatorio"],
        validate: { validator:val => {/^([1-9]{1})(\d{8})$/.test(val)},
        message: "El campo 'Documento de Identidad' no tiene un formato válido para Paraguay"
        }
    },
    telefono: {
        type: String,
        validate: {
            validator: val => { /^(\+5950)(9[1236]\d{7}|[1234]\d{8})$/.test(val)},
        message: "El campo 'telefono' no tiene un formato válido para Paraguay"
        }
    }

},{ timestamps: true });


module.exports.Usuario = mongoose.model ('Usuario', UsuarioSchema)