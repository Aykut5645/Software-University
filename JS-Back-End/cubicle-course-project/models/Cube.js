const { Schema, model } = require('mongoose');

const cubeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 500 },
    imageUrl: { type: String, required: true, match: /^https?\/\// },
    difficultyLevel: { type: Number, required: true, min: 1, max: 6 }
});

module.exports = model('Cube', cubeSchema);

/*
    Id - (ObjectId)
    Name - (String, required)
    Description - (String, required, max length validation)
    ImageUrl - (String, required, http/https validation)
    Difficulty Level - (Number, required, min and max valid range)
    Accessories - (ObjectId, ref Accessories Model)


    Id - number
    Name - string
    Description - string 
    Image URL - string
    Difficulty Level - number
*/