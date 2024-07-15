const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true
    },
    Address: {
        type: String,
    },
    dob: {
        type: Date,
    }
    
})

const User = mongoose.model('User', UserSchema)

module.exports = User