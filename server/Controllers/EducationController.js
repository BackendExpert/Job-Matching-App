const Education = require('../Models/Education')

const EducationController = {
    AddNewEducation: async (req, res) => {
        try{
            const EmailId = req.params.id
            // console.log(req.body, EmailId)
            const {
                school,
                course,
                classCourese,
                startDate,
                endDate
            } = req.body

            const AddEduNew = new Education({
                email: EmailId,
                school: school,
                course: course,
                classCourse: classCourese,
                startData: startDate,
                endData: endDate
            })

            const ResultNewEdu = AddEduNew.save()

            if(ResultNewEdu){
                return res.json({ Status: "Success"})
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }
        catch(err){
            console.log(err)
        }
    },
    GetEducationJF: async (req, res) => {
        try{
            const EmailID = req.params.id

            const GetEdu = await Education.find({ email: EmailID })

            if(GetEdu){
                return res.json({ Result: GetEdu })
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = EducationController