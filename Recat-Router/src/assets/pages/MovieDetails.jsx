import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movieDetails = useLoaderData();
  console.log(movieDetails);
  const [showDetails, setShowDetails] = useState(false);
  const { imdbID, Poster, Title, Country, Released, Plot } = movieDetails;

  return (
    <div className="max-w-xs mx-auto bg-black text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={Poster}
          alt={Title}
          className="w-fit mx-6 h-96 object-contain" 
        />
        {!showDetails && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
              <button
                onClick={() => setShowDetails(true)} 
                className="px-4 py-2 bg-pink-500 mt-[340px] text-white rounded-lg hover:bg-pink-600 focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
              >
                Watch Now
              </button>
          </div>
        )}
      </div>

      {/* Details Section */}
      {showDetails && (
        <div className="p-4">
          <h3 className="text-xl font-semibold text-pink-500 mb-2 truncate">
            {Title}
          </h3>
          <p className="text-sm text-gray-400 mb-2">
            <strong>Released:</strong> {Released}
          </p>
          <p className="text-sm text-gray-400 mb-2">
            <strong>Country:</strong> {Country}
          </p>
          <p className="text-sm text-gray-400 mb-4">
            <strong>Plot:</strong> {Plot}
          </p>
          <button
            onClick={() => setShowDetails(false)} 
            className="w-full bg-pink-500 text-white py-2 text-lg font-medium rounded-lg hover:bg-pink-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
