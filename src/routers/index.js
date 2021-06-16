const AuthRouter = require('./AuthRouter')
const MoviesRouter = require('./MoviesRote')

function router (app) {

    app.use('/api/auth', AuthRouter)
    app.use('/api/movies', MoviesRouter)
}

module.exports = router