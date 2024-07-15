const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')
const JobFinder = require('../Models/JobFinder')

const AuthController = {
    SignUp: async (req, res) => {
        try{
            const {username, email, password} = req.body

            const chechuser = await User.findOne({
                $and: [
                    {username: username},
                    {email: email}
                ]
            })

            if(chechuser) {
                return res.json({ Error: "User Already Exists"})
            }
            else{
                const hashPass = await bcrypt.hash(password, 10)

                const NewUser = new User({
                    username: username,
                    email: email,
                    password: hashPass,
                    Role: "JobFinder"
                })

                const ResultUser = NewUser.save()

                if(ResultUser) {
                    const NewJobFInder = new JobFinder({
                        username: username,
                        email: email,
                        mobile: '',
                        Address: '',
                        dob: '',
                        image: '',
                        cv: ''
                    })
                    const ResultJF = NewJobFInder.save()

                    if(ResultJF){
                        return res.json({ Status: "Success"})
                    }
                }
                else{
                    return res.json({ Error: "Internal Server Error"})
                }
            }

        }
        catch (err){
            console.log(err)
        }
    },

    SignIn: async(req, res) => {
        try{
            const {email, password} = req.body

            const findUser = await User.findOne({ email: email})
            
            if(findUser){
                const chechpass = await bcrypt.compare(password, findUser.password)

                if(chechpass){
                    const token = jwt.sign({ userId: findUser._id, userEmail: findUser.email, userRole: findUser.Role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    
                    return res.json({Status: "Success", Token:token, Result: findUser})    
                }
                else{
                    return res.json({ Error: "Passowrd not Match...."})
                }
            }
            else{
                return res.json({ Error: "No User Found...."})
            }

        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = AuthController