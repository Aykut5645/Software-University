const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    content: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post' }
});

module.exports = model('Comment', commentSchema);