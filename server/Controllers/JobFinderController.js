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

            const {
                address
            } = req.body

            const AddAddess = new JobFinder({
                Address: address
            })

            const ResultAddress = AddAddess.save()

            res.json({Status: "Success"})
        }
        catch(err){
            console.log(err)
        }
    }

}

module.exports = JobFinderController