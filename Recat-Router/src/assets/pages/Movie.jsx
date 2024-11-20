import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/UI/Card";

const Movie = () => {
  const moviesData = useLoaderData();
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {moviesData.map((curMovies) => {
          return <Card key={curMovies.imdbID} curMovies={curMovies} />;
        })}
      </ul>
    </>
  );
};

export default Movie;
