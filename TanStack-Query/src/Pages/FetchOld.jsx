import axios from "axios";
import { useEffect, useState } from "react";
// import { fetchPosts } from "../API/api";

const FetchOld = () => {
  // States for loading, error, and posts data
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetch posts data function
  const getPostsData = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
      );
      if (res.status === 200) {
        setPosts(res.data); // Set the fetched posts data
        setIsLoading(false); // Turn off loading state
      }
    } catch (error) {
      console.error(error);
      setIsError(true); // Set error state
      setIsLoading(false); // Turn off loading state
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  // Conditional rendering based on loading, error, and posts data
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
    <ul className="divide-y divide-gray-200 bg-white shadow rounded-lg">
      {posts?.map((curElem) => {
        const { id, title, body } = curElem;
        return (
          <li
            key={id}
            className="p-4 hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <p className="text-lg font-semibold text-gray-800">{title}</p>
            <p className="text-gray-600 mt-2">{body}</p>
          </li>
        );
      })}
    </ul>
  </div>
  
  );
};

export default FetchOld;