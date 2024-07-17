const JobFinder = require('../Models/JobFinder')

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

            console.log(req.body, EmailID)

            const {
                fname,
                lname,
                job,
                mobile,
                address,
                dob
            } = req.body

            const UpdateJF = await JobFinder.findOneAndUpdate(
                {email: EmailID},
                { $set: {
                    fname: fname,
                    lnmae: lname,
                    job: job,
                    mobile: mobile,
                    Address: address
                }},
                { new: true }
            )
        }
        catch(err){
            console.log(err)
        }
    }

}

module.exports = JobFinderController