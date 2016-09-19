let express = require('express')
let app = express()
let router = express.Router();

router.get('/', (req, res)=>{
	res.render('index',{
		title: '首页'
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