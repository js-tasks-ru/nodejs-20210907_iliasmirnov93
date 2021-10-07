const Product = require('../models/Product');
const mongoose = require('mongoose');


module.exports.productsBySubcategory = async function productsBySubcategory(ctx, next) {
  const { subcategory } = ctx.query;

  if (!subcategory) return next();
  ctx.body = {};
  const products = await Product.find({ subcategory: subcategory }).limit(20);
  ctx.body = { products: products.map(mapProduct) };
};

module.exports.productList = async function productList(ctx, next) {

  ctx.body = {};
  const products = await Product.find().limit(20);
  ctx.body = { products: products.map(mapProduct) };
};

module.exports.productById = async function productById(ctx, next) {
  ctx.body = {};
  if (!mongoose.Types.ObjectId.isValid(ctx.params.id)) {
    ctx.throw(400, 'invalid product id');
  }

  const product = await Product.findById(ctx.params.id);

  if (!product) {
    ctx.throw(404, `no product with ${ctx.params.id} id`);
  }

  ctx.body = { product: mapProduct(product) };
};

function mapProduct(product) {
	return {
		id: product.id,
		title: product.title,
		images: product.images,
		category: product.category,
		subcategory: product.subcategory,
		price: product.price,
		description: product.description,
	};
};