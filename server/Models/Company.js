const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  comName: {
    type: String,
    required: true,
    unique: true,
  },
  comEmail: {
    type: String,
    unique: true,
  },
  comAddress: {
    type: String,
  },
  comMobile: {
    type: String,
  },
  Owner:{
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;