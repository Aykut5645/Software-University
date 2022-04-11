const { Schema, model } = require('mongoose');

const catSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        validate: {
            validator: function (value) {
                return value[0].toLocaleUpperCase() == value[0];
            },
            message: props => `The name must begin with a capital letter - ${props.value}`
            // message: 'The name must begin with a capital letter - {VALUE}'
        }
    },
    color: {
        type: String,
        required: [true, 'Name is required'],
        enum: {
            values: ['black', 'white-black', 'white-grey', 'orange'],
            message: 'This color cannot be set'
        }
    }
});

module.exports = model('Cat', catSchema);