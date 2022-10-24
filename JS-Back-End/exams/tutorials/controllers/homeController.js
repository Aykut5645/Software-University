const { getAllItems } = require('../services/itemService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    if (req.user) {
        res.render('user-home', { courses: await getCourses('isUser') });
    } else {
        res.render('guest-home', { courses: await getCourses('isGuest') });
    }
});

async function getCourses(filter) {
    try {
        return await getAllItems(filter);
    } catch (error) {
        console.log('Home all courses err => ', error.message);
    }
}

module.exports = router;