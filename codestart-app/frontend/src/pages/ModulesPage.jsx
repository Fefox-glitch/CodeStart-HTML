import { useEffect, useState } from "react";
import axios from "axios";
import ModuleCard from "../components/ModuleCard";

const ModulesPage = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    axios.get("/api/modules").then(res => setModules(res.data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Módulos Educativos</h1>
      {modules.map((mod) => (
        <ModuleCard key={mod._id} {...mod} />
      ))}
    </div>
  );
};

export default ModulesPage;
