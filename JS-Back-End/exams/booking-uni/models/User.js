const { Schema, model, Types: { ObjectId } } = require('mongoose');

// TODO: Add validation according to assignment
const schema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    bookedHotels: { type: [ObjectId]},
    offeredHotels: {}
});

schema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

schema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

module.exports = model('User', schema);

/*
    Email - string (required), unique,
    Username – string (required), unique,
    Password - string (required),
    Booked hotels - a collection of Hotels the user have booked already,
    Offered Hotels – a collection of Hotels the user offers
*/