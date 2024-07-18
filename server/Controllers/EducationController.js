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
    }
}

module.exports = EducationController