import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ModulesPage from "./pages/ModulesPage";
import ModuleDetailPage from "./pages/ModuleDetailPage";
import CreateModulePage from "./pages/CreateModulePage";

/**
 * Main App component that handles routing
 * Uses React Router for navigation between different pages
 */
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/modules" replace />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/modules/:id" element={<ModuleDetailPage />} />
          <Route path="/crear-modulo" element={<CreateModulePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
