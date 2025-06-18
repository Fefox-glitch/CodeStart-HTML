import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ModuleCard from "../components/ModuleCard";

/**
 * ModulesPage component displays a list of all available modules
 * Includes loading states, error handling, and a hero section
 */
const ModulesPage = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get("/api/modules");
        setModules(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los módulos. Por favor, intente nuevamente.");
        setLoading(false);
        console.error("Error fetching modules:", err);
      }
    };

    fetchModules();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Módulos Educativos</h1>
              <p className="text-xl text-blue-100">
                Explora nuestros módulos de aprendizaje y mejora tus habilidades
              </p>
            </div>
            <Link
              to="/crear-modulo"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Crear Módulo
            </Link>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {modules.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-600 text-lg mb-4">
              No hay módulos disponibles en este momento.
            </p>
            <Link
              to="/crear-modulo"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Crear el Primer Módulo
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {modules.map((mod) => (
              <ModuleCard key={mod._id} {...mod} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulesPage;
