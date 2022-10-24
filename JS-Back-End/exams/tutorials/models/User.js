const { Schema, model, Types: { ObjectId } } = require('mongoose');

// TODO: Add validation according to assignment
const schema = new Schema({
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
});

schema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

module.exports = model('User', schema);