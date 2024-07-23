const express = require('express');
const CompanyController = require('../Controllers/CompanyController');

const router = express.Router();

router.post('/CreateCompany/:id', CompanyController.CreateCompany)

module.exports = router;