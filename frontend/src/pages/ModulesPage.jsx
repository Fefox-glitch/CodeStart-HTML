import { useEffect, useState } from "react";
import axios from "axios";
import ModuleCard from "../components/ModuleCard";

const ModulesPage = () => {
  const [modules, setModules] = useState([]);
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const fetchModules = () => {
    let url = "/api/modules?";
    if (category) url += `category=${category}&`;
    if (level) url += `level=${level}&`;

    axios.get(url).then(res => setModules(res.data));
  };

  useEffect(() => {
    fetchModules();
  }, [category, level]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Módulos Educativos</h1>

      <div className="flex gap-4 mb-6">
        <label className="flex items-center gap-2">
          Categoría:
          <select 
            className="border rounded p-2"
            value={category} 
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Testing">Testing</option>
          </select>
        </label>

        <label className="flex items-center gap-2">
          Nivel:
          <select 
            className="border rounded p-2"
            value={level} 
            onChange={e => setLevel(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </label>
      </div>

      <div>
        {modules.length === 0 ? (
          <p className="text-gray-500">No hay módulos disponibles.</p>
        ) : (
          modules.map(mod => (
            <ModuleCard key={mod._id} {...mod} />
          ))
        )}
      </div>
    </div>
  );
};

export default ModulesPage;
