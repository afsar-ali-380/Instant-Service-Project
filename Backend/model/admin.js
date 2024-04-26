const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    conpassword: String,
    mobile: Number,
    date: {type: Date, default: Date.now}
})

const Admin = mongoose.model('admins', adminSchema);

module.exports = Admin;