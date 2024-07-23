const Company = require('../Models/Company')

const CompanyController = {
    CreateCompany: async (req, res) => {
        try {
            const EmailID = req.params.id
           
            // console.log(req.body)

            const {
                comName,
                comEmail,
                comAddress,
                comMobile,
            } = req.body

            
        } 
        catch (err) {
            console.log(err);
        }
    },
}

module.exports = CompanyController

