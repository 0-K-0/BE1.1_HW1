const mongooes = require("mongoose");
const restaurantSchema = new mongooes.Schema(
  {
    name: { type: String, required: true },
    cuisine: [
      {
        type: String,
        enum: [
          "Italian",
          "Mexican",
          "Chinese",
          "Indian",
          "American",
          "French",
          "Japanese",
          "Mediterranean",
          "Thai",
          "Vegetarian",
          "Vegan",
          "Other",
        ],
      },
    ],
    location: { type: String, required: true },
    owner: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String },
    openingYear: { type: Number },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    SpecialDishes: [{ type: String }],
    photoURLs: { type: String },
  },
  { timeStaps: true },
);
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
