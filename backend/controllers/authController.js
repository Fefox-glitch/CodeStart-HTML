const User = require('../models/User');

/**
 * Controller for handling authentication-related operations
 */

/**
 * Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: 'El correo electrónico ya está registrado'
      });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password
    });

    // Create token
    const token = user.getSignedJwtToken();

    // Remove password from response
    user.password = undefined;

    res.status(201).json({
      success: true,
      token,
      user
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      message: 'Error al registrar el usuario',
      error: error.message
    });
  }
};

/**
 * Login user
 * @route   POST /api/auth/login
 * @access  Public
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
      return res.status(400).json({
        message: 'Por favor proporcione email y contraseña'
      });
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({
        message: 'Credenciales inválidas'
      });
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        message: 'Credenciales inválidas'
      });
    }

    // Create token
    const token = user.getSignedJwtToken();

    // Remove password from response
    user.password = undefined;

    res.json({
      success: true,
      token,
      user
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      message: 'Error al iniciar sesión',
      error: error.message
    });
  }
};

/**
 * Get current logged in user
 * @route   GET /api/auth/me
 * @access  Private
 */
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({
      message: 'Error al obtener datos del usuario',
      error: error.message
    });
  }
};

/**
 * Logout user / clear cookie
 * @route   POST /api/auth/logout
 * @access  Private
 */
exports.logout = (req, res) => {
  res.json({
    success: true,
    message: 'Sesión cerrada exitosamente'
  });
};
