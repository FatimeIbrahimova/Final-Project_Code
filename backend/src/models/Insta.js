const mongoose = require ('mongoose');
const {Schema} = mongoose;
const productSchema = new Schema (
  {
    url: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      required: true,
    },
    comment: {
      type: Number,
      required: true,
    },
  },
  {timestamps: true}
);
const Products = mongoose.model('insta', productSchema);
module.exports = Products;