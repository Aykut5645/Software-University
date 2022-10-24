const { Schema, model, Types: { ObjectId } } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: [60, 'Allowed max length of text: 120'],
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'ImageUrl must start with http/https'],
    },
    difficultyLevel: {
        type: Number,
        min: 1,
        max: 6,
    },
    accessories: { type: [ObjectId], ref: 'Accessory' }
});

module.exports = model('Cube', schema);