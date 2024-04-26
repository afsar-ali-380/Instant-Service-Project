const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: String,
    service: String,
    date: String,
    address: String,
    password: String,
    bookingDate: {type: Date, default: Date.now}
})

const Service = mongoose.model('serviceRecords', serviceSchema);

module.exports = Service;