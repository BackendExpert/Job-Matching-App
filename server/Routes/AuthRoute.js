const express = require('express');
const AuthController = require('../Controllers/AuthController');

const router = express.Router()

router.post('/SignUp', AuthController.SignUp)

module.exports = router