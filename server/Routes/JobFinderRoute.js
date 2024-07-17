const express = require('express');
const JobFinderController = require('../Controllers/JobFinderController');

const router = express.Router()

router.get('/GetJFData/:id', JobFinderController.GetDataJF)
router.post('/UpdateJFData/:id', JobFinderController.JobFinderUpdate)

module.exports = router