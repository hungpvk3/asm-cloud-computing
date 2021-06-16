const mongoose = require('mongoose')


async function connect () {
    try {
        await mongoose.connect('mongodb+srv://kevin:<1234>@cluster0.k9fxz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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