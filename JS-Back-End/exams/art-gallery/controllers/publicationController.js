const { hasUser } = require('../middlewares/guards');
const { createItem, getAllItems, getItemById, deleteItem } = require('../services/itemService');
const { parseError } = require('../util/parseError');

const router = require('express').Router();

router.get('/catalog', async (req, res) => {
    let publications;
    try {
        publications = await getAllItems();
    } catch (error) {
        console.log('Get catalog => ', error.message);
    }
    res.render('gallery', {
        title: 'Gallery Page',
        publications
    });
});

router.get('/:id/details', async (req, res) => {
    let publication;
    try {
        publication = await getItemById(req.params.id);
    } catch (error) {
        console.log('Get details => ', error.message);
    }
    res.render('details', {
        title: 'Details Page',
        publication
    });
});

router.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Page'
    });
});

router.post('/create', hasUser(), async (req, res) => {
    let data;
    try {
        data = {
            title: req.body.title,
            paintTech: req.body.paintTech,
            artPicture: req.body.artPicture,
            certificate: req.body.certificate,
            author: req.user._id,
        };
        await createItem(data);
        res.redirect('/publication/catalog');
    } catch (error) {
        res.render('create', {
            title: 'Create Page',
            errors: parseError(error),
            publication: data,
        });
    }
});

router.get('/:id/delete', hasUser(), async (req, res) => {
    try {
        publication = await getItemById(req.params.id);
        await deleteItem(req.params.id);
        res.redirect('/publication/catalog');
    } catch (error) {
        console.log('Get delete => ', error.message);
    }
});

module.exports = router;