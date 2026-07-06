const mongooes = require("mongoose");
const BookSchema = new mongooes.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    genre: [
      {
        type: String,
        enum: [
          "Fiction",
          "Non-Fiction",
          "Mystery",
          "Thriller",
          "Science Fiction",
          "Fantasy",
          "Romance",
          "Historical",
          "Biography",
          "Self-help",
          "Other",
        ],
      },
    ],
    language: { type: String, required: true },
    country: { type: String, default: "United States" },
    rating: { type: String, min: 0, max: 10, default: 0 },
    summary: { type: String },
    coverURL: { type: String },
  },
  { timestamps: true} 
);
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
