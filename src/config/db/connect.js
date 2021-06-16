const mongoose = require('mongoose')


async function connect () {
    try {
        await mongoose.connect('mongodb+srv://hungpv:<password>@mern-app.fja5n.mongodb.net/Movies_pr?retryWrites=true&w=majority', {
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