const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: {
        type: String,
        maxLength: 500,
        required: true,
        match: /^https?:\/\//
    },
});

module.exports = model('Accessory', schema);