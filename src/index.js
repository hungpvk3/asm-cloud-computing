const express = require('express')
const app = express()
const cors = require('cors')
const Router = require('./routers/index')
const PORT = 5000 || process.env.PORT
const db = require('./config/db/connect')

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// Router
Router(app)

// Connected database
db.connect()


app.listen(PORT, () => console.log(`App listening on ${PORT}`))