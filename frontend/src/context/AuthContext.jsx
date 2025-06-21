import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const AuthContext = createContext(null);

/**
 * AuthProvider component for managing authentication state
 * @param {Object} props - Component props
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check authentication status on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (authService.isAuthenticated()) {
          const userData = await authService.getCurrentUser();
          setUser(userData);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  /**
   * Register a new user
   * @param {Object} userData - User registration data
   */
  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      setUser(response.user);
      navigate('/modules');
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Error en el registro'
      };
    }
  };

  /**
   * Login user
   * @param {Object} credentials - User login credentials
   */
  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      setUser(response.user);
      navigate('/modules');
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Error en el inicio de sesión'
      };
    }
  };

  /**
   * Logout user
   */
  const logout = () => {
    authService.logout();
    setUser(null);
    navigate('/login');
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook for using auth context
 * @returns {Object} Auth context value
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
