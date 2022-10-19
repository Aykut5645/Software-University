module.exports = () => (req, res, next) => {
    if (req.body) {
        for (const key in req.body) {
            object[key] = obj[key].trim();
        }
    }
    next();
};