let mongoose = require('mongoose')
let MoviceSchema = require('../schema/movie')
let Movie = mongoose.model('Movie', MoviceSchema)

module.exports = Movie