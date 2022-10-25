const { Schema, model, Types: { ObjectId } } = require('mongoose');

// TODO: Add validation according to assignment
const schema = new Schema({
    title: {
        type: String,
        minlength: [6, 'Title should be a minimum of 6 characters long']
    },
    paintTech: {
        type: String,
        required: [true, 'You must point paint techniques'],
        maxLength: [15, 'Painting technique should be a maximum of 15 characters long']
    },
    artPicture: {
        type: String,
        validate: {
            validator: /^https?:\/\//,
            message: 'The Art picture should start with http:// or https://'
        },
    },
    certificate: {
        type: String,
        enum: {
            values: ['Yes', 'No'],
            message: 'Certificate of authenticity there must be value "Yes" or "No"'
        }
    },
    publications: {
        type: [ObjectId], ref: 'Publication'
    },
    author: {
        type: ObjectId, ref: 'User'
    },
    usersShared: {
        type: [ObjectId], ref: 'User'
    },
});

module.exports = model('Publication', schema);