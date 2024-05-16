const express = require('express');
const app = express();

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', ISBN: 'ISBN-1' },
    { id: 2, title: 'Book 2', author: 'Author 2', ISBN: 'ISBN-2' },
    { id: 3, title: 'Book 3', author: 'Author 3', ISBN: 'ISBN-3' }
];

const reviews = [
    { title: 'Book 1', review: 'A gripping tale of adventure and suspense.' },
    { title: 'Book 2', review: 'An insightful exploration of the human condition.' },
    { title: 'Book 3', review: 'A heartwarming story of love and redemption.' }
];

app.get('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books.find(book => book.ISBN === isbn);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

app.get('/books/author/:author', (req, res) => {
    const author = req.params.author;
    const authorBooks = books.filter(book => book.author === author);
    if (authorBooks.length > 0) {
        res.json(authorBooks);
    } else {
        res.status(404).json({ error: 'No books found for the author' });
    }
});





app.get('/books/:title', (req, res) => {
    const title = req.params.title; // Get the title from the URL parameter
   const booksWithTitle = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  
    if (booksWithTitle.length === 0) {
      return res.status(404).json({ error: 'No books found with the specified title.' });
    }
  
    res.json({ books: booksWithTitle });
  });
  
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
