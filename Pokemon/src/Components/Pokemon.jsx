import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCards from "./PokemonCards";
import "./index.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=132";
  const getPokemonData = async () => {
    try {
      const response = await axios.get(API);
      const detailedData = await Promise.all(
        response.data.results.map(async (curPokemon) => {
          const result = await axios.get(curPokemon.url);
          return result.data;
        })
      );
      setPokemon(detailedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  // const fetchPokemon = async () => {
  //     try {
  //       const res = await fetch(API);
  //       const data = await res.json();
  //       //   console.log(data);

  //       const detailedPokemonData = data.results.map(async (curPokemon) => {
  //         const res = await fetch(curPokemon.url);
  //         const data = await res.json();
  //         return data;
  //       });
  //       //   console.log(detailedPokemonData);

  //       const detailedResponses = await Promise.all(detailedPokemonData);
  //       console.log(detailedResponses);
  //       setPokemon(detailedResponses);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //       setError(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchPokemon();
  //   }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }
  return (
    <>
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards max-sm:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3">
            {searchData.map((curPokemon) => {
              return (
                <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
