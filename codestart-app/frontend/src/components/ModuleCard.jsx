const ModuleCard = ({ title, description, level }) => (
  <div className="module-card border rounded p-4 shadow-md mb-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="mb-2">{description}</p>
    <span className="text-sm font-medium text-gray-600">Nivel: {level}</span>
  </div>
);

export default ModuleCard;
