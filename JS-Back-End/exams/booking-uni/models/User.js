const { Schema, model, Types: { ObjectId } } = require('mongoose');

// TODO: Add validation according to assignment
const schema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    bookedHotels: { type: [ObjectId], ref: 'Hotel' },
    offeredHotels: { type: [ObjectId], ref: 'Hotel' }
});

schema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

schema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

module.exports = model('User', schema);