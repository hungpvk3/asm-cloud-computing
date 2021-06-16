const express = require('express')
const app = express()
const cors = require('cors')
const Router = require('./routers/index')
const port = process.env.PORT || 5000
const db = require('./config/db/connect')

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// Router
Router(app)

// Connected database
db.connect()


app.listen(port, () => console.log(`App listening on ${port}`))