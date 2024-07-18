const mongoose = require('mongoose')

const EducationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },

})

const Education = mongoose.model('Education', EducationSchema)

module.exports = Education