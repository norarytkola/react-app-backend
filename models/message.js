const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: String,
    email: String,
    content: String,
    date: Date,
})

module.exports = mongoose.model('Message', messageSchema)