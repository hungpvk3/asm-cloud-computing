const mongoose = require('mongoose')


async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/netflix_pr', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log('Connected database !')
    } catch (error) {
        console.log(error)        
    }
}

module.exports = { connect }