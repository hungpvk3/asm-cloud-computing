const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movies = new Schema({
    name: { type: 'string', required: true},
    des: { type: 'string', default: 'No Title'},
    image: { type: 'string'},
    video: { type: 'string'},
    user: { type: Schema.Types.ObjectId, ref: 'auths' }
}, { timestamps: true })

module.exports = mongoose.model('posts', Movies)