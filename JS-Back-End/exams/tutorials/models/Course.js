const { Schema, model, Types: { ObjectId } } = require('mongoose');

// TODO: Add validation according to assignment
const schema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, maxLength: 50 },
    imageUrl: { type: String, required: true },
    duration: { type: String, required: true },
    createdAt: { type: Date, default: Date.now(), required: true },
    ownerId: { type: ObjectId, ref: 'User' },
    description: { type: String, required: true, maxLength: 50 },
    usersEnrolled: { type: [ObjectId], ref: 'User' },
});

schema.index({ title: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

module.exports = model('Course', schema);