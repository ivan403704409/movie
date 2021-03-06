let mongoose = require('mongoose')

let MoviceSchema = new mongoose.Schema({
	doctor: String,
	title: String,
	language: String,
	country: String,
	summary: String,
	flash: String,
	poster: String,
	year: Number,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})

MoviceSchema.pre('save', function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now()
	}else{
		this.meta.updateAt = Date.now()
	}
})

MoviceSchema.statics = {
	fetch(cb){
		console.log('in')
		return this
			.find({})
			.sort('meta.updateAt')
			.exec(cb)
	},
	findById(id, cb){
		return this
			.findOne({ _id: id })
			.exect(cb)
	}
}
module.exports = MoviceSchema