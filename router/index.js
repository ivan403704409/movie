let express = require('express')
let app = express()
let router = express.Router();
let Movie = require('../model/movie')

router.get('/', (req, res)=>{
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

router.get('/admin', (req, res)=>{
	console.log('admin')
	res.render('admin',{
		title: '后台'
	})
})

router.get('/detail', (req, res)=>{
	res.render('detail',{
		title: '详情'
	})
})

router.get('/list', (req, res)=>{
	res.render('list',{
		title: '列表页'
	})
})

module.exports = router