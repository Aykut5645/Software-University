const { verifyToken } = require("../services/authService");

module.exports = () => async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        try {
            const userData = await verifyToken(token);
            req.user = userData;
            res.locals.user = userData;
        } catch (err) {
            res.clearCookie('token');
            res.redirect('/auth/login');
            console.log('JWT => ', err.message);
            return;
        }
    }
    next();
};