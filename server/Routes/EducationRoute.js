const express = require('express');
const EducationController = require('../Controllers/EducationController');

const router = express.Router()

router.post('/AddNewEdu/:id', EducationController.AddNewEducation)
router.get('/getEducation/:id', EducationController.GetEducationJF)

module.exports = router