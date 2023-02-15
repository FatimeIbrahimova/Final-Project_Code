const mongoose = require ('mongoose');
const {Schema} = mongoose;
const productSchema = new Schema (
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    allDesc: {
      type: String,
      required: true,
    }
  },
  {timestamps: true}
);
const Products = mongoose.model ('productsAdd2', productSchema);
module.exports = Products;