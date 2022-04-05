const create = {
    get: (req, res) => {
        res.render('create', { title: 'Create Cube Page' });
    },
    post: (req, res) => { }
};

module.exports = create;