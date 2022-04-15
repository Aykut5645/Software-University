const comments = {
    post: async (req, res) => {
        const cubeId = req.params.cubeId;
        const comment = {
            author: req.body.author,
            content: req.body.content
        };

        try {
            await req.api.createComment(cubeId, comment);
            res.redirect(`/details/${cubeId}`);
        } catch (err) {
            console.error(err.message);
        }
    }
};

module.exports = comments;