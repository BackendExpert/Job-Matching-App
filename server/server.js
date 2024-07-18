const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path'); 
const bodyParser = require('body-parser');

const AuthRoute = require('./Routes/AuthRoute')
const JobFinderRoute = require('./Routes/JobFinderRoute')
const EducationRoute = require('./Routes/EducationRoute')

const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use('/auth', AuthRoute)
app.use('/jobfinder', JobFinderRoute)
app.use('/Education', EducationRoute)

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})