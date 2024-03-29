// module.exports = () => (req, res, next) => {
//     if (req.body) {
//         for (const key in req.body) {
//             req.body[key] = req.body[key].trim();
//         }
//     }
//     next();
// };

module.exports = (req, res, next) => {
    if (req.body) {
        for (const key in req.body) {
            req.body[key] = req.body[key].trim();
        }
    }
    next();
};