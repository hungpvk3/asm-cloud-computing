const Movies = require('../models/MoviesModel')

class MoviesController {

    async create (req, res) {
        const { name, des, image, video } = req.body

        if (!name)
            return res.status(404).json({ success: false, message: 'Missing name' })
        
        try {
            const newMovie = await new Movies ({
                name,
                des,
                image,
                video,
                user: req.userId,
            })
            await newMovie.save()

            res.status(200).json({ success: true, message: 'Tao thanh cong', movie: newMovie })

        } catch (error) {
            return res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }

    async update (req, res) {
        const { name, des, image, video } = req.body

        try {
            let updateMovie = {
                name,
                des,
                image,
                video
            }

            const MovieCodition = { _id: req.params.id, user: req.userId }

            updateMovie = await Movies.findOneAndUpdate(MovieCodition, updateMovie, { new: true })

            if (!updateMovie)
                return res.status(401).json({ success: false, message: 'Movie not found'})
            
            res.status(200).json({ success: true, message: 'Cap nhat thanh cong', movie: updateMovie })
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }

    async destroy (req, res) {

        try {
            const moviesCondition = { _id: req.params.id, user: req.userId }

            const deleteMovie = await Movies.findOneAndDelete(moviesCondition)

            if (!deleteMovie)
                return res.status(401).json({ success: false, message: 'Movie not found'})
            
            res.status(200).json({ success: true, message: 'Xoa thanh cong', movie: deleteMovie })
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }

    async show (req, res) {
        const movies = await Movies.find({})

        res.status(200).json({ success: true, movies })
    }
}


module.exports = new MoviesController
