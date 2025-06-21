import axios from 'axios';

const API_URL = '/api/auth';

/**
 * Service for handling authentication-related API calls
 */
const authService = {
  /**
   * Register a new user
   * @param {Object} userData - User registration data
   * @returns {Promise} Response from the server
   */
  register: async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  /**
   * Login user
   * @param {Object} credentials - User login credentials
   * @returns {Promise} Response from the server
   */
  login: async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  /**
   * Logout user
   */
  logout: () => {
    localStorage.removeItem('token');
  },

  /**
   * Get current auth token
   * @returns {string|null} Current auth token
   */
  getCurrentToken: () => {
    return localStorage.getItem('token');
  },

  /**
   * Check if user is authenticated
   * @returns {boolean} True if user is authenticated
   */
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  /**
   * Get authenticated user data
   * @returns {Promise} User data from the server
   */
  getCurrentUser: async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const response = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  }
};

// Add axios interceptor for adding auth header
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authService;
