const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },

    adultPrice: {
        type: Number,
        required: true,
        max: 100,
        min: 5,
        default: 5
    },
    childrenPrice: {
        type: Number,
        required: true,
        max: 100,
        min: 5,
        default: 5
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    rating: {   
        type: Number,
        "default": 0,
        min: 0,
        max: 5,
    },
    services: [String],
    available: {
        type: String,
        required: true,
        enum: ['Yes', 'No'],
    },
    });
mongoose.model('Location', locationSchema);