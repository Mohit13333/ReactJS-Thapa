import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <main>
        <section className="max-w-screen-xl mx-auto rounded-lg bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6">
          <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="md:w-1/2 text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Discover the Latest Movies
              </h1>
              <p className="text-lg text-pink-300">
                Welcome to our movie world!
              </p>

              <div className="text-gray-300 space-y-5">
                <p>
                  <strong className="text-red-500">Movie Title:</strong> Titanic
                </p>
                <p>
                  <strong className="text-red-500">Plot:</strong> A
                  seventeen-year-old aristocrat falls in love with a kind but
                  poor artist aboard the luxurious, ill-fated R.M.S. Titanic.
                </p>
                <p>
                  <strong className="text-red-500">Rating:</strong> 7.9 / 10
                </p>
                <p>
                  <strong className="text-red-500">Duration:</strong> 3h 14min
                </p>
                <p>
                  <strong className="text-red-500">Released:</strong> 1997
                </p>
                <p>
                  <strong className="text-red-500">Awards:</strong> Won 11
                  Oscars, 126 wins, 83 nominations
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <NavLink to="/movies">
                  <button className="text-lg bg-transparent text-red-600 py-3 px-8 border border-red-600 rounded-lg font-semibold hover:bg-red-100 hover:text-red-700 transition duration-200">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <img
                src="/movies.png"
                alt="Titanic Movie Poster"
                className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
