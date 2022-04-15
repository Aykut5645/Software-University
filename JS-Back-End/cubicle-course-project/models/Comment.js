const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    author: { type: String, required: true },
    content: { type: String, required: true, maxLength: 350 }
});

module.exports = model('Comment', commentSchema);