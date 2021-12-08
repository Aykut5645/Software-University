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
    difficultyLevel: { 
        type: Number, 
        min: 1, 
        max: 6 
    },
});

module.exports = new model('Cube', schema);