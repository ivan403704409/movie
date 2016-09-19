let app = require('express')()
let mongoose = require('mongoose')
let swig = require('swig')
let port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost/movie')

swig.setDefaults({ cache: false })
app.set('views', './views/pages')
app.set('view engine', 'html')
app.engine('html', swig.renderFile)



app.use('/', require('./router/index'))

app.listen(port)
console.log('app start at port ' + port)