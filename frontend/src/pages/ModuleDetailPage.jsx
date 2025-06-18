import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * ModuleDetailPage displays detailed information about a specific module
 * Including its content and code samples
 */
const ModuleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchModuleDetails = async () => {
      try {
        const response = await axios.get(`/api/modules/${id}`);
        setModuleData(response.data);
        setLoading(false);
      } catch (err) {
        setError("No se pudo encontrar el módulo solicitado");
        setLoading(false);
        console.error("Error fetching module details:", err);
      }
    };

    fetchModuleDetails();
  }, [id]);

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
            onClick={() => navigate('/modules')} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver a Módulos
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{moduleData.title}</h1>
              <div className="inline-block px-3 py-1 bg-blue-500 bg-opacity-50 rounded-full text-sm font-medium">
                Nivel: {moduleData.level}
              </div>
            </div>
            <button
              onClick={() => navigate('/modules')}
              className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Volver a Módulos
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Description */}
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Descripción</h2>
            <p className="text-gray-700 leading-relaxed">{moduleData.description}</p>
          </div>

          {/* Module Content */}
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contenido del Módulo</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {moduleData.content}
              </p>
            </div>
          </div>

          {/* Code Samples */}
          {moduleData.codeSamples && moduleData.codeSamples.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ejemplos de Código</h2>
              <div className="space-y-4">
                {moduleData.codeSamples.map((code, index) => (
                  <div key={index} className="relative">
                    <div className="absolute right-4 top-4">
                      <button
                        onClick={() => navigator.clipboard.writeText(code)}
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Copiar código"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                        </svg>
                      </button>
                    </div>
                    <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <code className="text-gray-100 font-mono text-sm">{code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleDetailPage;
