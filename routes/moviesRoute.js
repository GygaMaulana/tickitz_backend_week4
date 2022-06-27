const express = require("express")
const {getAllMovies, addNewMovies, updateMovies, deleteMovies} = require('../controller/moviesController')
const router = express.Router()

router.get('/', getAllMovies)
router.post('/', addNewMovies)
router.patch('/:movieID', updateMovies)
router.delete('/:movieID', deleteMovies)




module.exports = router
