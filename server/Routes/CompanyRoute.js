const express = require('express');
const CompanyController = require('../Controllers/CompanyController');

const router = express.Router();

router.post('/CreateCompany/:id', CompanyController.CreateCompany)
router.get('/UserCompany/:id', CompanyController.GetCompany)

module.exports = router;