const mongoose = require('mongoose')

const EducationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    school: {
        type: String,
        required: true,
    },
    course: {
        type: String,
    },
    classCourse: {
        type: String,
    },
    startData: {
        type: String,
        required: true,
    },
    endData: {
        type: String
    }
})

const Education = mongoose.model('Education', EducationSchema)

module.exports = Education