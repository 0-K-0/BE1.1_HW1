const mongoose = require("mongoose");
const ProductCardSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, default: 0 },
  reviewCount: { type: Number, require: true, default: 0 },
  like: { type: Number, required: true, default: 0 },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  offers: {
    discount: { type: Number, default: false },
    freeDelivery: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },
  },
  stock: { type: Number, required: true },
});
const ProductCard = mongoose.model("ProductCardSchema", ProductCard);
module.exports = ProductCard;
