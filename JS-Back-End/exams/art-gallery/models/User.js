const { Schema, model, Types: { ObjectId } } = require('mongoose');

// TODO: Add validation according to assignment
const schema = new Schema({
    username: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    address: { type: String, required: true },
    publications: { type: [ObjectId], ref: 'Publication' },
});

module.exports = model('User', schema);