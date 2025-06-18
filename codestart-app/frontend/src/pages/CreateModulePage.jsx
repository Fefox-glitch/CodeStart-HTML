import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * CreateModulePage component provides a form to create new learning modules
 * Includes form validation and error handling
 */
const CreateModulePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    codeSamples: "",
    level: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Process code samples - split by newlines and filter empty lines
      const payload = {
        ...formData,
        codeSamples: formData.codeSamples
          .split("\n")
          .map(code => code.trim())
          .filter(code => code !== "")
      };

      await axios.post("/api/modules", payload);
      navigate("/modules");
    } catch (err) {
      console.error("Error creating module:", err);
      setError("Error al crear el módulo. Por favor, verifica los datos e inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Crear Nuevo Módulo</h1>
            <button
              onClick={() => navigate("/modules")}
              className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Introduce el título del módulo"
              />
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe el módulo brevemente"
              />
            </div>

            {/* Content Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contenido
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Contenido detallado del módulo"
              />
            </div>

            {/* Code Samples Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ejemplos de Código
              </label>
              <textarea
                name="codeSamples"
                value={formData.codeSamples}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                placeholder="Introduce los ejemplos de código (uno por línea)"
              />
              <p className="mt-1 text-sm text-gray-500">
                Cada línea será tratada como un ejemplo de código separado
              </p>
            </div>

            {/* Level Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nivel
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecciona un nivel</option>
                <option value="Principiante">Principiante</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => navigate("/modules")}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Creando..." : "Crear Módulo"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateModulePage;
