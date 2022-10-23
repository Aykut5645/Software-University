const { Schema, model, Types: { ObjectId } } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    imageUrl: { type: String, required: true },
    freeRooms: { type: Number, required: true, min: 1, max: 100 },
    owner: { type: ObjectId, ref: 'Hotel', required: true }
});

schema.index({ name: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

module.exports = model('Hotel', schema);