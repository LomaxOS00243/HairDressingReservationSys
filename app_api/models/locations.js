const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    adult: { type: Number, required: true },
    child: { type: Number, required: true },
}); 
const reviewSchema = new mongoose.Schema({
    author: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    reviewText: { type: String, required: true },
    createdOn: { type: Date, "default": Date.now }
});

const barberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    city: String,
    rating: { type: Number, "default": 0, min: 0, max: 5 },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: String,
    services: [String],
    price: [priceSchema],
    coords: { type: [Number], index: '2dsphere' },
    reviews: [reviewSchema],
    available: { type: Boolean, required: true }
});

mongoose.model('Barber', barberSchema);
