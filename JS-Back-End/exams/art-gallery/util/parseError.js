const parseError = (error) => {
    if (error.name === 'ValidationError') {
        return Object.values(error.errors).map(x => x.message);
    } else if (Array.isArray(error)) {
        return error.map(x => x.msg);
    } else {
        return error.message.split('\n');
    }
};

module.exports = {
    parseError
};