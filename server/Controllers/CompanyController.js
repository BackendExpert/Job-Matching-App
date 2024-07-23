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

            const query = {
                $or: [
                  { Owner: EmailID },
                  { comEmail: comEmail },
                  { comName: comName }
                ]
              };

            const CheckCompany = await Company.findOne(query)

            if(!CheckCompany){
                const CompanyCreate = new Company({
                    comName: comName,
                    comEmail: comEmail,
                    comAddress: comAddress,
                    comMobile: comMobile,
                    Owner: EmailID
                })

                const ResultCompany = await CompanyCreate.save()

                if(ResultCompany){
                    return res.json({ Status: "Success"})
                }
                else{
                    return res.json({ Error: "Internal Server Error while creating Company"})
                }

            }
            else{
                return  res.json({ Error: "You already have a Company"})
            }

        } 
        catch (err) {
            console.log(err);
        }
    },

    GetCompany: async(req, res) => {
        try{
            const EmailID = req.params.id

            const GetCompany = await Company.findOne({ Owner: EmailID })

            if(GetCompany){
                return res.json({ Result: GetCompany })
            }       
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = CompanyController

