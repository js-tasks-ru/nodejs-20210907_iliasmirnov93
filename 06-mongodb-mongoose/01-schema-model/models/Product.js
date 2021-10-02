const mongoose = require('mongoose');
const connection = require('../libs/connection');
const Schema = mongoose.Schema;


const productSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	category: {
		ref: 'Category',
		type: Schema.Types.ObjectId,
		required: true,
	},
	subcategory: {
		ref: 'SubCategory',
		required: true,
		type: Schema.Types.ObjectId,

	},
	images: [String],
});

module.exports = connection.model('Product', productSchema);
