const { verifyToken } = require("../services/authService");

module.exports = () => async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        try {
            const userData = await verifyToken();
            req.user = userData;
        } catch (err) {
            res.clearCookie('token');
            res.redirect('/auth/login');
            return;
        }
    }
    next();
};