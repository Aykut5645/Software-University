const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    difficultyLevel: { type: Number },
});

module.exports = new model('Cube', schema);