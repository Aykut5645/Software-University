const hasUser = () => (req, res, next) => {
    if (req.user) {
        next();
    } else {
        redirect('/auth/login');
    }
};

const isGuest = () => (req, res, next) => {
    if (!req.user) {
        next();
    } else {
        redirect('/');
    }
};

module.exports = {
    hasUser,
    isGuest
};