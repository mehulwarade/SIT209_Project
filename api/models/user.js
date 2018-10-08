const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
name: String,
username:String,
email: String,
password: String
}));