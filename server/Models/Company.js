const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  
});

const Company = mongoose.model('ModelName', CompanySchema);

module.exports = Company;