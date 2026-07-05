const mongoose = require("mongoose");
const ProductCard = new mongoose.model({
  ProdctName: String,
  Description: String,
  Info: String,
  Color: String,
  Size: Number,
  Price: Number,
});
const Product = mongoose.Schema("Product", ProductCard);
module.exports = Product;
