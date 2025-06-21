import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ModulesPage from "./pages/ModulesPage";
import ModuleDetailPage from "./pages/ModuleDetailPage";
import CreateModulePage from "./pages/CreateModulePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

/**
 * Main App component that handles routing
 * Uses React Router for navigation between different pages
 * Wraps the application with AuthProvider for authentication state management
 */
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Routes */}
            <Route
              path="/modules"
              element={
                <ProtectedRoute>
                  <ModulesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/modules/:id"
              element={
                <ProtectedRoute>
                  <ModuleDetailPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/crear-modulo"
              element={
                <ProtectedRoute>
                  <CreateModulePage />
                </ProtectedRoute>
              }
            />

            {/* Catch all route - redirect to modules */}
            <Route path="*" element={<Navigate to="/modules" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
