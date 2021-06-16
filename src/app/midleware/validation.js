const jwt = require('jsonwebtoken')

const validation = (req, res, next) => {
    const reqHeader = req.header('Authorization')

    const token = reqHeader && reqHeader.split(' ')[1]

    if (!token) {
        return res.status(500).json({ success: false, message: 'Invalid token or not found' })
    }

    try {
        const decoded = jwt.verify(token, 'kevin')

        req.userId = decoded.userId

        next()
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Token not found' })
    }
}

module.exports = validation
