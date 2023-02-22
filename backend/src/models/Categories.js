const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema(
	{
		categoryName: {
			type: String,
		},
		category: {
			type: String,
		},
		exampleImg: {
			type: String,
		},
		categoryDesc: {
			type: String,
		},
	},
	{ timestamps: true }
);
const Categories = mongoose.model("categories", categorySchema);
module.exports = Categories;
