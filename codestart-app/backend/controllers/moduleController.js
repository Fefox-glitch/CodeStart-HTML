const Module = require("../models/Module");

exports.getModules = async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
