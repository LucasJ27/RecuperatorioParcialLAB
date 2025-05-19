const Book = require("../models/Book");

const getAll = async () => {
  try {
    return await Book.find()
  } catch (err) {
   console.error(err);
  }
};

const getById = async (id)=>{
    try {
        return await Book.findById(id)
        
    } catch (error) {
        console.error(error)
    }
}

const postBook = async (body)=>{
    try {
        const libro = await Book.create(body)
        return libro
    } catch (error) {
        console.error(error)
    }
}

const putBook = async (id,update)=>{
    try {

        const newBook = await Book.findByIdAndUpdate(id,update,{new:true})

        newBook.save()

        return newBook;

        
    } catch (error) {
        console.error(error)
    }
}

const deleteBook = async (id)=>{
    try {
    return await Book.findByIdAndDelete(id)
    } catch (error) {
        console.error(error)
    }
}


module.exports = {getAll,
    getById,
    postBook,
    putBook,
    deleteBook
}