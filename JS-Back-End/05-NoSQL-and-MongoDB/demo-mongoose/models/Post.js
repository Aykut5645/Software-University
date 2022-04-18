const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    content: { type: String, required: true, minLength: 10 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = model('Post', postSchema);