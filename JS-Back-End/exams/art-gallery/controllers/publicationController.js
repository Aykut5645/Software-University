const { hasUser } = require('../middlewares/guards');
const { createItem, getAllItems, getItemById, deleteItem, updateItem, shareItem } = require('../services/itemService');
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
        publication,
        isAuthor: publication.author.toString() === req.user._id,
        shared: publication.usersShared.some(x => x.toString() === req.user._id)
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

router.get('/:id/edit', hasUser(), async (req, res) => {
    let publication;
    try {
        publication = await getItemById(req.params.id);
        if (data.author.toString() !== req.user._id) {
            throw new Error('You are not authorized to edit this publication!');
        }
    } catch (error) {
        console.log('Edit get => ', error.message);
    }
    res.render('edit', {
        title: 'Edit Page',
        publication,
        _id: req.params.id
    });
});

router.post('/:id/edit', hasUser(), async (req, res) => {
    let publication;
    try {
        let data = await getItemById(req.params.id);
        if (data.author.toString() !== req.user._id) {
            throw new Error('You are not authorized to edit this publication!');
        }
        publication = {
            title: req.body.title,
            paintTech: req.body.paintTech,
            artPicture: req.body.artPicture,
            certificate: req.body.certificate,
        };
        await updateItem(req.params.id, publication);
        res.redirect('/publication/catalog');
    } catch (error) {
        res.render('edit', {
            title: 'Edit Page',
            errors: parseError(error),
            publication,
            _id: req.params.id
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

router.get('/:id/share', async (req, res) => {
    let publication;
    try {
        publication = await getItemById(req.params.id);
        if (publication.author.toString() === req.user._id) {
            throw new Error('You are not authorized to share this publication!');
        }
        shareItem(req.params.id, req.user._id);
        res.redirect('/');
    } catch (error) {
        console.log('Get share => ', error.message);
    }
});

module.exports = router;