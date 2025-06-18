const ModuleCard = ({ title, description, category, level }) => (
  <div className="module-card border rounded p-4 shadow-md mb-4 bg-white">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="mb-4 text-gray-600">{description}</p>
    <div className="flex gap-4">
      <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded">
        {category}
      </span>
      <span className="text-sm font-medium px-2 py-1 bg-green-100 text-green-800 rounded">
        Nivel: {level}
      </span>
    </div>
  </div>
);

export default ModuleCard;
