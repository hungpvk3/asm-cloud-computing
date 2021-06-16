const Auth = require('../models/AuthModel')
const jwt = require('jsonwebtoken')

class AuthController {

    // [POST] api/auth/login
    async login (req, res) {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(401).json({ success: false, message: 'Please enter your username or password' })
        }

        try {
            const user = await Auth.findOne({ username })
            const pass = await Auth.findOne({ password })

            if (!user || !pass) {
                return res.status(401).json({ success: false, message: 'Vui long nhap lai thong tin'})
            }

            // return token
            const token = jwt.sign({ userId: user._id }, 'kevin')

            res.status(200).json({ success: true, message:'Dang nhap thanh cong !', token })
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Internal server error'})
        }
    }


    // [POST] api/auth/register
    async register (req, res) {
        const { username, password} = req.body

        if (!username || !password) {
            return res.status(401).json({ success: false, message: 'Missing Username or Password' })
        }

        try {
            const user = await Auth.findOne({ username })

            if (user) {
                return res.status(401).json({ success: false, message: 'Already user exists' })
            }

            const newUser = await new Auth({ username, password})
            await newUser.save()

            res.status(200).json({ success: true, message: 'Created successfully !' })
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Internal server error'})
        }
    }


    // [GEt] api/auth
    async show (req, res) {
        try {
            const user = await Auth.findById(req.userId).select('username')

            res.status(200).json({ success: true, user})
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Internal server error'})
        }
    }
}

module.exports = new AuthController
