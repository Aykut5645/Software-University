const { Schema, model } = require('mongoose');

const cubeSchema = new Schema({
    id: { type: String },
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    difficultyLevel: { type: Number }
});

module.exports = model('Cube', cubeSchema);

/*
    Id - number
    Name - string
    Description - string 
    Image URL - string
    Difficulty Level - number
*/