const mongoose = require("mongoose")
const express = require("express")
const bookRouter = require("./src/routes/books")
const authorRouter = require("./src/routes/author")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use("/books", bookRouter)
app.use("/authors", authorRouter)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado con MongoDB"))
    .catch((err) => console.log("Error al conectar con MongoDB", err));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
