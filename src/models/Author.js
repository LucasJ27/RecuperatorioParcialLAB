const mongoose = require("mongoose");

const autorsSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    bio: {
        type: String,
    },
    fechaNacimiento: {
        type: Date,
        require: true,
    },
    nacionalidad: {
        type: String,
        require: true,
    },
    libros: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Libros",
        },
    ],
});

const Autors = mongoose.model("Autors", autorsSchema);

module.exports = Autors;
