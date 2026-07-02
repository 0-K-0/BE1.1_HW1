const mongoose = require("mongoose");
const CardImageSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  calories: { type: Number, required: true },
  carbohydrates: { type: Number, required: true },
  protein: { type: Number, required: true },
  fat: { type: Number, required: true },
  liked: { type: Number, default: 0 },
});
const CardImage = mongoose.model("CardImage", CardImageSchema);
module.exports = CardImage;
