import { NavLink } from "react-router-dom";

const Card = ({ curMovies }) => {
  const { Poster, imdbID, Title } = curMovies;

  return (
    <li
      key={imdbID}
      className="w-fit bg-black text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative">
        <img
          src={Poster}
          alt={Title}
          className="w-96 h-96 object-contain" // Full width with constrained height
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>
      <div className="p-4 flex flex-col items-start w-full"> {/* Ensures content takes full width */}
        <h3 className="text-lg font-semibold text-red-500 mb-2 truncate">
          {Title}
        </h3>
        <div className="mt-auto">
          <NavLink to={`/movies/${imdbID}`}>
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              Watch Now
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default Card;