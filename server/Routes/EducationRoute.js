const express = require('express');
const EducationController = require('../Controllers/EducationController');

const router = express.Router()

router.post('/AddNewEdu/:id', EducationController.AddNewEducation)

module.exports = router