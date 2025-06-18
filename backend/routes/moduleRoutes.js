const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');

/**
 * Module routes configuration
 * All routes are prefixed with /api/modules
 */

/**
 * @route   POST /api/modules
 * @desc    Create a new module
 * @access  Public
 */
router.post('/', moduleController.createModule);

/**
 * @route   GET /api/modules
 * @desc    Get all modules
 * @access  Public
 */
router.get('/', moduleController.getAllModules);

/**
 * @route   GET /api/modules/:id
 * @desc    Get a single module by ID
 * @access  Public
 */
router.get('/:id', moduleController.getModuleById);

/**
 * @route   PUT /api/modules/:id
 * @desc    Update a module
 * @access  Public
 */
router.put('/:id', moduleController.updateModule);

/**
 * @route   DELETE /api/modules/:id
 * @desc    Delete a module
 * @access  Public
 */
router.delete('/:id', moduleController.deleteModule);

module.exports = router;
