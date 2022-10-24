const hasUser = () => (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('/auth/login');
        return false;
    }
};

const isGuest = () => (req, res, next) => {
    if (!req.user) {
        next();
    } else {
        res.redirect('/');
    }
};

module.exports = {
    hasUser,
    isGuest
};