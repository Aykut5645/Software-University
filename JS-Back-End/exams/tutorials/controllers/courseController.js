const { hasUser } = require('../middlewares/guards');
const { createItem, getItemById, updateItem, deleteItem, enroll } = require('../services/itemService');
const { parseError } = require('../util/parseError');

const router = require('express').Router();

router.get('/:courseId/details', hasUser(), async (req, res) => {
    try {
        const course = await getItemById(req.params.courseId);
        res.render('course-details', {
            course,
            isOwner: req.user._id === course.ownerId.toString(),
            enrolled: course.usersEnrolled.some(x => x.toString() === req.user._id),
        });
    } catch (error) {
        console.log('Details loading err => ', err.message);
    }
});

router.get('/create', hasUser(), (req, res) => {
    res.render('create-course', {});
});

router.post('/create', hasUser(), async (req, res) => {
    try {
        if (Object.values(req.body).some(x => !x)) {
            throw new Error('All fields are required!');
        }
        const data = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            ownerId: req.user._id,
        };
        await createItem(data);
        res.redirect('/');
    } catch (error) {
        res.render('create-course', {
            errors: parseError(error),
            course: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                duration: req.body.duration,
            }
        });
    }
});

router.get('/:courseId/edit', hasUser(), async (req, res) => {
    let course;
    try {
        course = await getItemById(req.params.courseId);
        if (course.ownerId.toString() !== req.user._id) {
            throw new Error('You are not authorized to edit this course!');
        }
        res.render('edit-course', { course });
    } catch (error) {
        res.render('course-details', {
            errors: parseError(error),
            course
        });
    }
});

router.post('/:courseId/edit', hasUser(), async (req, res) => {
    try {
        if (Object.values(req.body).some(x => !x)) {
            throw new Error('All fields are required!');
        }
        const data = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
        };
        await updateItem(req.params.courseId, data);
        res.redirect(`/course/${req.params.courseId}/details`);
    } catch (error) {
        res.render('edit-course', {
            errors: parseError(error),
            course: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                duration: req.body.duration,
                _id: req.params.courseId
            }
        });
    }
});

router.get('/:courseId/delete', hasUser(), async (req, res) => {
    let course;
    try {
        course = await getItemById(req.params.courseId);
        if (course.ownerId.toString() !== req.user._id) {
            throw new Error('You are not authorized to delete this course!');
        }
        await deleteItem(req.params.courseId);
        res.redirect('/');
    } catch (error) {
        res.render('course-details', {
            errors: parseError(error),
            course
        });
    }
});

router.get('/:courseId/enroll', hasUser(), async (req, res) => {
    let course;
    try {
        course = await getItemById(req.params.courseId);
        if (course.ownerId.toString() === req.user._id) {
            throw new Error('The owner cannot enroll to his course');
        }
        await enroll(req.user._id, req.params.courseId);
        res.redirect(`/course/${req.params.courseId}/details`);
    } catch (error) {
        res.render(`course-details`, {
            errors: parseError(error),
            course
        });
    }
});

module.exports = router;