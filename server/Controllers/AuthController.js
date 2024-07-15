const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AuthController = {
    SignIn: async (req, res) => {
        try{
            const {username, email, password} = req.body

            
        }
        catch (err){
            console.log(err)
        }
    }
}

module.exports = AuthController