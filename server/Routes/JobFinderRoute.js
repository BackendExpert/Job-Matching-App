const express = require('express');
const JobFinderController = require('../Controllers/JobFinderController');
const multer = require('multer');
const path = require('path');

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
});


router.get('/GetJFData/:id', JobFinderController.GetDataJF)
router.post('/UpdateJFData/:id', JobFinderController.JobFinderUpdate)

module.exports = router