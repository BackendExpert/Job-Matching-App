const express = require('express');
const JobFinderController = require('../Controllers/JobFinderController');

const router = express.Router()

router.get('/GetJFData/:id', JobFinderController.GetDataJF)

module.exports = router