const mongooes = require("mongoose");
const NotesSchema = new mongooes.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, trim: true },
    category: [
      {
        type: String,
        enum: ["Personal", "Work", "Study", "Ideas", "Journal", "Other"],
      },
    ],
    tags: [{ type: String }],
  },
  { timestamps: true },
);
const Notes = mongooes.model("Notes", NotesSchema);
module.exports = Notes;
