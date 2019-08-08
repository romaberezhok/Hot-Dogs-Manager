const mongoose = require('mongoose');

const HotDogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('HotDog', HotDogSchema);