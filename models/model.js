//Schema page
const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    price: String
   
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;