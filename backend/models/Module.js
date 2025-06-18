const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  content: String,
  codeSamples: [String],
  category: { type: String, required: true }, // ej: "Frontend", "Backend", "Testing"
  level: { type: String, enum: ["Básico", "Intermedio", "Avanzado"], required: true }
});

module.exports = mongoose.model("Module", moduleSchema);
