const mongoose = require("mongoose");
const ProductCard = new mongoose.Schema({
  ProdctName: String,
  Description: String,
  Info: String,
  Color: String,
  Size: Number,
  Price: Number,
});
const Product = mongoose.model("Product", ProductCard);
module.exports = Product;
