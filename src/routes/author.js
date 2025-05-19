const express = require("express");
const controllerAuthor = require("../controller/authorController");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const books = await controllerAuthor.getAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ Mensaje: "Error al obtener los autores", Detalle: error });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const book = await controllerAuthor.getById(id);

        if (!book) {
            return res.status(404).json({ Mensaje: "ID no encontrado" });
        }

        res.json(book);
    } catch (error) {
        res
            .status(500)
            .json({ Mensaje: "Error al obtener el autor por id", Detalle: error });
    }
});

router.post("/", async (req, res) => {
    try {
        const book = await controllerAuthor.postAuthor(req.body);

        if (!book) {
            return res.json({ Mensaje: "Error al crear" });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json({ Mensaje: "Error al crear", Detalle: error });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;

        const book = await controllerAuthor.putAuthor(id, update);

        res.json(book);
    } catch (error) {
        res.status(500).json({ Mensaje: "Error al actualizar el autor", Detalle: error });
    }
});


router.put("/:id/addBook/:bookId", async (req, res) => {
    try {
        const idAutor = req.params.id;

        const idBook = req.params.bookId;

        const autor = await controllerAuthor.addLibro(idAutor, idBook);

        res.json({ Mensaje: "Libro añadido" });
    } catch (error) {
        res.status(500).json({ Mensaje: "Error al actualizar el autor", Detalle: error });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const autor = await controllerAuthor.deleteAuthor(id);

        if (!autor) {
            return res.status(404).json({ Mensaje: "ID no encontrado" });
        }

        res.status(200).json({ Mensaje: "Eliminado correctamente", autor });
    } catch (error) {
        res.status(500).json({ Mensaje: "Error al eliminar el autor", Detalle: error.message });
    }
});

module.exports = router;
