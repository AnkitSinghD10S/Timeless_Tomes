const express = require('express')
const router = express.Router();

const { postBook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');

router.post('/create-book',postBook)

router.get('/',getAllBooks)

router.get("/:id",getSingleBook)

router.put('/edit/:id',updateBook)

router.delete('/delete/:id',deleteBook);

module.exports = router;