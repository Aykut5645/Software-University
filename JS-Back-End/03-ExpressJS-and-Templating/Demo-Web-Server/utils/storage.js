const fs = require('fs').promises;
const uniqid = require('uniqid');

let data = {};

async function init() {
    try {
        data = JSON.parse(await fs.readFile('./database/books.json'));
    } catch (err) {
        console.error(err);
    }

    return (req, res, next) => {
        req.storage = {
            getAllBooks,
            addBook,
            deleteBook
        };
        next();
    };
}

async function addBook(book) {
    const newBook = {
        id: uniqid(),
        ...book
    };

    data.push(newBook);

    try {
        await fs.writeFile('./database/books.json', JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }
}

function getAllBooks() {
    const handledBooks = {
        books: data
    };
    return handledBooks;
}

async function deleteBook(id) {
    data = data.filter(b => b.id !== id);
    
    try {
        await fs.writeFile('./database/books.json', JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    init,
    getAllBooks,
    addBook,
    deleteBook
};