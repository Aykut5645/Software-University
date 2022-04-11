const { Schema, model } = require('mongoose');

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: {
        type: Number,
        required: true,
        min: [18, 'The age cannot be less than 18'],
        max: Infinity
    }
});

// model methods
personSchema.methods.getInfo = function () {
    console.log(`Hello! My name is ${this.firstName}. I am ${this.age} years old.`);
};

// model virtual properties (getters/setters)
personSchema.virtual('fullName').get(function () {
    console.log(this.firstName + ' ' + this.lastName);
});

// property custom validation
personSchema.path('age').validate(function () {
    if (this.age <= 18) {
        return false;
    }
    return true;
}, 'The age must be less or equal to 18');

module.exports = model('Person', personSchema);