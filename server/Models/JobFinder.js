const mongoose = require('mongoose')

const JobFinderSchema = new mongoose.Schema({
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
    },
    Address: {
        type: String,
    },
    dob: {
        type: Date,
    },
    image: {
        type: String,
    },
    cv: {
        type: String,
    }
})

const JobFinder = mongoose.model('JobFinder', JobFinderSchema)

module.exports = JobFinder