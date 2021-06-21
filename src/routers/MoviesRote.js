const express = require('express')
const router = express.Router()
const validation = require('../app/midleware/validation')
const moviesController = require('../app/controllers/MoviesController')

router.get('/', moviesController.show)
router.post('/create', validation, moviesController.create)
router.put('/update/:id', validation, moviesController.update)
router.delete('/destroy/:id', validation, moviesController.destroy)

module.exports = router

