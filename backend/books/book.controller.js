const Book = require('./book.model');
const postBook=async(req,res)=>{
    try {
        const newBook = await Book({...req.body})
        await newBook.save();
        res.status(200).send({message:"book posted successfully"})
    } catch (error) {
        console.error("Error occured in creatinf a book", error);
        res.status(500).send({message:'falied to create a book '})
    }
}

const getAllBooks = async (req,res)=>{
    try {
        const books = await Book.find().sort({createdAt:-1});
        res.status(200).send(books)
    } catch (error) {
        console.error("Error occured in featching book", error);
        res.status(500).send({message:'falied to fetching a book '})
    }
}

const getSingleBook = async (req,res)=>{
    try {
        const{id}= req.params;
        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({message:"book not found"})
        }
        res.status(200).send(book)
    } catch (error) {
        console.error("Error occured in featching book", error);
        res.status(500).send({message:'falied to fetching a book '})
    }
}

const updateBook = async (req,res)=>{
    try {
        const{id}= req.params;
        const updatedBook = await Book.findByIdAndUpdate(id,req.body ,{new:true});
        if(!updatedBook){
            res.status(404).send({message:"book not found"});
        }
        res.status(200).send(updatedBook)
    } catch (error) {
        console.error("Error occured updating book", error);
        res.status(500).send({message:'falied to update book '})
    }
}

const deleteBook = async (req,res)=>{
    try {
        const{id}= req.params;
        const deleteBook = await Book.findByIdAndDelete(id);
        if(!deleteBook){
            res.status(404).send({message:"book not found"});
        }
        res.status(200).send(deleteBook)
    } catch (error) {
        console.error("Error occured deleting book", error);
        res.status(500).send({message:'falied to delete book '})
    }
}


module.exports={ postBook ,getAllBooks,getSingleBook,updateBook,deleteBook}