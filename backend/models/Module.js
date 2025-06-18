const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  codeSamples: [String],
  level: String
});

module.exports = mongoose.model("Module", moduleSchema);
