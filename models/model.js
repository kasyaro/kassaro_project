//Schema page
const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    price: Number
   
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;