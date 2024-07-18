const JobFinder = require('../Models/JobFinder')
const path = require('path')

const JobFinderController = {
    GetDataJF: async (req, res) => {
        try{
            const UserID = req.params.id

            const JFData = await JobFinder.findOne({ email: UserID })

            if(JFData){
                return res.json({ Result: JFData })
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }
        catch (err){
            console.log(err)
        }
    },
    JobFinderUpdate: async (req, res) => {
        try{
            const EmailID = req.params.id

            // console.log(req.body, EmailID)

            // const {
            //     fname,
            //     lname,
            //     job,
            //     mobile,

            
            //     address,
            //     dob
            // } = req.body

            const updateFields = {};
            for (const [key, value] of Object.entries(req.body)) {
              if (value !== undefined && value !== "" && value !== null) {
                updateFields[key] = value;
              }
            }

            // console.log(updateFields)

            const UpdateJF = await JobFinder.findOneAndUpdate(
                {email: EmailID},
                updateFields,
                { new: true }
            )
            // console.log(UpdateJF)

            if(UpdateJF){
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

    ProfileImgUpdate: async(req, res) => {
        try{
            const UserEmail = req.params.id
            const image  = req.file.path;

            // console.log(UserEmail, image)
            const UpdateImg = await JobFinder.findOneAndUpdate(
                { email: UserEmail },
                {
                    $set: {
                        image: image
                    }
                },
                { new: true }
            )

            if(UpdateImg){
                return res.json({ Status: "Success" })
            }
            else{
                return res.json({ Error: 'Internal Server Error'})
            }
        }
        catch(err){
            console.log(err)
        }
    },

    UpdateJFCV: async(req, res) => {
        try{
            const EmailID = req.params.id
            // console.log(req.file.path, EmailID)
            
            const CVFile = req.file.path;

            const UpdateCV = await JobFinder.findOneAndUpdate(
                {email: EmailID},
                {
                    $set: {
                        cv: CVFile
                    }
                },
                { new: true }
            )

            if(UpdateCV){
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

module.exports = JobFinderController