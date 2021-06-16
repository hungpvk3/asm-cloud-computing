const express = require('express')
const validator = require('../app/midleware/validation')
const authController = require('../app/controllers/AuthController')
const router = express.Router()

router.post('/login', authController.login)
router.post('/register', authController.register)
router.get('/', validator, authController.show)


module.exports = router
