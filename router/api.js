let express = require('express')
let app = express()
let router = express.Router();
let Movie = require('../model/movie')

router.post('/movie/add', (req, res)=>{

	Movie.fetch((err, movies) => {
		if(err){
			console.log(err)
		}else{
			console.log(movies)
		}
	})
	res.render('index',{
		title: '首页2'
	})
})

module.exports = router