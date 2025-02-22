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
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    job: {
        type: String,
    },
    mobile: {
        type: String,
    },
    address: {
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
    },
    createAt: {
        type: Date,
    }
})

const JobFinder = mongoose.model('JobFinder', JobFinderSchema)

module.exports = JobFinder