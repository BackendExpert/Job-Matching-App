const Education = require('../Models/Education')

const EducationController = {
    AddNewEducation: async (req, res) => {
        try{
            const EmailId = req.params.EmailId
            console.log(req.body, EmailId)
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = EducationController