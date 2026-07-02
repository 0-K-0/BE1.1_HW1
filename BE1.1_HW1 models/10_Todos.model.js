const mongooes = require("mongoose");
const TodosSchema = mongooes.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: String, enum: ["Low", "Medium", "High"] },
  dueDate: { type: Date },
  compoleted: { type: Boolean, default: false },
  tags: [{ type: String }],
  createdAt: { type: Date },
  updatedAt: { type: Date },
});
const Todos = mongooes.model("Todos", TodosSchema);
module.export = Todos;
