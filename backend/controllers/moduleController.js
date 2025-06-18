const Module = require("../models/Module");

exports.getModules = async (req, res) => {
  const { category, level } = req.query;

  let filter = {};
  if (category) filter.category = category;
  if (level) filter.level = level;

  try {
    const modules = await Module.find(filter);
    res.json(modules);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener módulos" });
  }
};

exports.createModule = async (req, res) => {
  const newModule = new Module(req.body);
  try {
    await newModule.save();
    res.status(201).json(newModule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
