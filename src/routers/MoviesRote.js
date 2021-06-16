const express = require('express')
const router = express.Router()
const moviesController = require('../app/controllers/MoviesController')

router.get('/', moviesController.show)
router.post('/create', moviesController.create)
router.put('/update/:id', moviesController.update)
router.delete('/destroy/:id', moviesController.destroy)

module.exports = router

