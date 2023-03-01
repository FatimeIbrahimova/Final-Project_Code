const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema(
	{
		url: {
			type: String,
		},
		title: {
			type: String,
		},
		desc: {
			type: String,
		},
		name: {
			type: String,
		},
		date: {
			type: String,
		},
		allDesc: {
			type: String,
		},
	},
	{ timestamps: true }
);
const Products = mongoose.model("allProductt", productSchema);
module.exports = Products;
