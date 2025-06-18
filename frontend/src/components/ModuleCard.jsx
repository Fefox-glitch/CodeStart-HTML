import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * ModuleCard component displays a single module in a card format
 * Links to the detailed view of the module
 */
const ModuleCard = ({ _id, title, description, level }) => (
  <Link 
    to={`/modules/${_id}`} 
    className="block no-underline transition-transform duration-300 hover:-translate-y-1"
  >
    <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h2>
      <p className="mb-4 text-gray-600 leading-relaxed line-clamp-2">{description}</p>
      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
        Nivel: {level}
      </div>
    </div>
  </Link>
);

ModuleCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default ModuleCard;
