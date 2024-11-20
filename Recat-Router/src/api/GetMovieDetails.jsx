import axios from "axios";

const GetMovieDetails = async ({ params }) => {
  const id = params.MovieId; // Extract movie ID from params
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    // console.log(response.data);

    // No "Search" key in single-movie responses
    return response.data; // Return the entire movie data
  } catch (error) {
    console.error("Error:", error.message);
    return null; // Return null in case of an error
  }
};

export default GetMovieDetails;