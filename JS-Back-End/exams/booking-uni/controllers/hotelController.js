const router = require('express').Router();
const { create, getById, update } = require('../services/itemService');
const { parseError } = require('../util/parseError');

router.get('/:hotelId/details', async (req, res) => {
    let hotel;
    let isOwner;
    try {
        hotel = await getById(req.params.hotelId);
        if (hotel.owner.toString() === req.user._id) {
            isOwner = true;
        }
    } catch (error) {
        console.log('Details page => ', error.message)
    }
    res.render('details', {
        title: 'Details',
        hotel,
        isOwner
    });
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create'
    });
});

router.post('/create', (req, res) => {
    try {
        if (Object.values(req.body).some(x => !x)) {
            throw new Error('All fields are required!');
        }
        const payload = {
            name: req.body.hotel,
            city: req.body.city,
            freeRooms: Number(req.body.freeRooms),
            imageUrl: req.body.imgUrl,
            owner: req.user._id
        };
        create(payload);
        res.redirect('/');
    } catch (error) {
        res.render('create', {
            title: 'Create',
            errors: parseError(error)
        });
    }
});

router.get('/:hotelId/edit', async (req, res) => {
    let hotel;
    try {
        hotel = await getById(req.params.hotelId);
        if (hotel.owner.toString() !== req.user._id) {
            return res.redirect('/auth/login');
        }
    } catch (error) {
        console.log('Edit get page => ', error.message);
    }
    res.render('edit', {
        title: 'Edit',
        hotel
    });
});

router.post('/:hotelId/edit', async (req, res) => {
    let payload;
    try {
        hotel = await getById(req.params.hotelId);
        if (hotel.owner.toString() !== req.user._id) {
            return res.redirect('/auth/login');
        }
        payload = {
            name: req.body.hotel,
            city: req.body.city,
            freeRooms: Number(req.body.freeRooms),
            imageUrl: req.body.imageUrl
        };
        if (Object.values(req.body).some(x => !x)) {
            throw new Error('All fields are required!');
        }
        update(req.params.hotelId, payload);
        res.redirect(`/hotel/${req.params.hotelId}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit',
            errors: parseError(error),
            hotel: { ...payload, _id: req.params.hotelId }
        });
    }
});

module.exports = router;