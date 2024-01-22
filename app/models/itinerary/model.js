const mongoose = require('mongoose');

/**
 * TODO: Sample model for reference
 */
const schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
});

const Itinerary = mongoose.model('Itinerary', schema);

module.exports = Itinerary;
