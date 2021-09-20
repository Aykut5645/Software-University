const router = require('express').Router();

router.get('/', (req, res) => {
    const ctx = req.storage.getAllBooks();

    res.render('catalog', ctx);
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    req.storage.addBook(req.body);

    res.redirect('/catalog');
});

router.get('/:id', (req, res) => {
    req.storage.deleteBook(req.params.id);

    res.redirect('/catalog');
});

module.exports = router;