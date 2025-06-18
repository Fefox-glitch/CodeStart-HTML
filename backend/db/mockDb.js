/**
 * MockDb class provides an in-memory database implementation
 * for storing and managing educational modules
 */
class MockDb {
  constructor() {
    this.modules = [];
    this.lastId = 0;
  }

  /**
   * Generate a new unique ID for modules
   * @returns {string} A unique ID
   */
  generateId() {
    this.lastId += 1;
    return this.lastId.toString();
  }

  /**
   * Create a new module
   * @param {Object} moduleData - The module data to create
   * @returns {Promise<Object>} The created module
   */
  async createModule(moduleData) {
    if (!moduleData) {
      throw new Error('Module data is required');
    }

    const module = {
      ...moduleData,
      _id: this.generateId(),
      createdAt: new Date().toISOString()
    };

    this.modules.push(module);
    return module;
  }

  /**
   * Get all modules
   * @returns {Promise<Array>} Array of all modules
   */
  async getAllModules() {
    return [...this.modules].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  /**
   * Get a module by ID
   * @param {string} id - The ID of the module to find
   * @returns {Promise<Object|null>} The found module or null
   */
  async getModuleById(id) {
    if (!id) {
      throw new Error('Module ID is required');
    }

    return this.modules.find(module => module._id === id) || null;
  }

  /**
   * Update a module
   * @param {string} id - The ID of the module to update
   * @param {Object} moduleData - The new module data
   * @returns {Promise<Object|null>} The updated module or null
   */
  async updateModule(id, moduleData) {
    if (!id) {
      throw new Error('Module ID is required');
    }

    const index = this.modules.findIndex(module => module._id === id);
    if (index === -1) return null;

    // Keep the original ID and creation date
    const updatedModule = {
      ...this.modules[index],
      ...moduleData,
      _id: id,
      updatedAt: new Date().toISOString()
    };

    this.modules[index] = updatedModule;
    return updatedModule;
  }

  /**
   * Delete a module
   * @param {string} id - The ID of the module to delete
   * @returns {Promise<Object|null>} The deleted module or null
   */
  async deleteModule(id) {
    if (!id) {
      throw new Error('Module ID is required');
    }

    const index = this.modules.findIndex(module => module._id === id);
    if (index === -1) return null;

    const [deletedModule] = this.modules.splice(index, 1);
    return deletedModule;
  }
}

// Export a singleton instance
module.exports = new MockDb();
