const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;