module.exports = {
    getCreate: (req, res) => {
        res.render('create', { title: 'Create Cube Page' });
    },
    postCreate: (req, res) => { }
};