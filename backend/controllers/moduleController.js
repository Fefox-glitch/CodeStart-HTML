const db = require('../db/mockDb');

/**
 * Controller for handling module-related operations
 */

/**
 * Create a new module
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.createModule = async (req, res) => {
  try {
    const { title, description, content, level, codeSamples } = req.body;

    // Basic validation
    if (!title || !description || !content || !level) {
      return res.status(400).json({
        message: 'Todos los campos requeridos deben ser proporcionados'
      });
    }

    const module = await db.createModule({
      title,
      description,
      content,
      level,
      codeSamples: Array.isArray(codeSamples) ? codeSamples : []
    });

    res.status(201).json(module);
  } catch (error) {
    console.error('Error creating module:', error);
    res.status(500).json({
      message: 'Error al crear el módulo',
      error: error.message
    });
  }
};

/**
 * Get all modules
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getAllModules = async (req, res) => {
  try {
    const modules = await db.getAllModules();
    res.json(modules);
  } catch (error) {
    console.error('Error fetching modules:', error);
    res.status(500).json({
      message: 'Error al obtener los módulos',
      error: error.message
    });
  }
};

/**
 * Get a single module by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getModuleById = async (req, res) => {
  try {
    const module = await db.getModuleById(req.params.id);
    if (!module) {
      return res.status(404).json({
        message: 'Módulo no encontrado'
      });
    }
    res.json(module);
  } catch (error) {
    console.error('Error fetching module:', error);
    res.status(500).json({
      message: 'Error al obtener el módulo',
      error: error.message
    });
  }
};

/**
 * Update a module
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.updateModule = async (req, res) => {
  try {
    const { title, description, content, level, codeSamples } = req.body;

    // Basic validation
    if (!title && !description && !content && !level) {
      return res.status(400).json({
        message: 'Al menos un campo debe ser proporcionado para actualizar'
      });
    }

    const module = await db.updateModule(req.params.id, {
      title,
      description,
      content,
      level,
      codeSamples: Array.isArray(codeSamples) ? codeSamples : undefined
    });

    if (!module) {
      return res.status(404).json({
        message: 'Módulo no encontrado'
      });
    }

    res.json(module);
  } catch (error) {
    console.error('Error updating module:', error);
    res.status(500).json({
      message: 'Error al actualizar el módulo',
      error: error.message
    });
  }
};

/**
 * Delete a module
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.deleteModule = async (req, res) => {
  try {
    const module = await db.deleteModule(req.params.id);
    if (!module) {
      return res.status(404).json({
        message: 'Módulo no encontrado'
      });
    }
    res.json({
      message: 'Módulo eliminado exitosamente',
      module
    });
  } catch (error) {
    console.error('Error deleting module:', error);
    res.status(500).json({
      message: 'Error al eliminar el módulo',
      error: error.message
    });
  }
};
