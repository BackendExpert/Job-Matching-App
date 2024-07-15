const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User')

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
                    return res.json({ Status: "Success"})
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

    SignIm: async(req, res) => {
        try{
            const {email, password} = req.body

            
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = AuthController