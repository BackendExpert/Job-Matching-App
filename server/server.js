const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path'); 


const AuthRoute = require('./Routes/AuthRoute')
const JobFinderRoute = require('./Routes/JobFinderRoute')

const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors())
app.use(express.json())

app.use('/auth', AuthRoute)
app.use('/jobfinder', JobFinderRoute)

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})