const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    resumen: {
        type: String,
        required: false,
    },
    genero: {
        type: String,
        required: true,
    },
    publicacion: {
        type: Date,
        required: true,
    },
    disponible: {
        type: Boolean,
        required: true,
    },
});

const Libros = mongoose.model("Libros", libroSchema);
module.exports = Libros
