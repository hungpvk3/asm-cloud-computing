const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Auth = new Schema({
    username: { type: 'string', required: true },
    password: { type: 'string', required: true}
})

module.exports = mongoose.model('auths', Auth)
