/* eslint-disable no-undef */
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, fetchPosts, updatePost } from "../API/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNumber], // useState
    queryFn: () => fetchPosts(pageNumber), // useEffect
    placeholderData: keepPreviousData,
  });

  //! mutation function to delete the post
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNumber], (curElem) => {
        return curElem?.filter((post) => post.id !== id);
      });
    },
  });

  //! mutation function to update the post
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (apiData, postId) => {
      console.log(apiData, postId);

      queryClient.setQueryData(["posts", pageNumber], (postsData) => {
        return postsData?.map((curPost) => {
          return curPost.id === postId
            ? { ...curPost, title: apiData.data.title }
            : curPost;
        });
      });
    },
  });

  // Conditional rendering based on loading, error, and posts data
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p> Error: {error.message || "Something went wrong!"}</p>;

  return (
<div className="max-w-4xl mx-auto p-4">
  <ul className="divide-y divide-gray-200 bg-white shadow rounded-lg">
    {data?.map((curElem) => {
      const { id, title, body } = curElem;
      return (
        <li key={id} className="p-4 flex flex-col gap-2">
          <NavLink
            to={`/rq/${id}`}
            className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <p className="text-sm text-gray-500">ID: {id}</p>
            <p>{title}</p>
            <p className="text-gray-600">{body}</p>
          </NavLink>
          <div className="flex space-x-4 mt-2">
            <button
              onClick={() => deleteMutation.mutate(id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
            <button
              onClick={() => updateMutation.mutate(id)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Update
            </button>
          </div>
        </li>
      );
    })}
  </ul>

  {/* Pagination */}
  <div className="flex justify-between items-center mt-6">
    <button
      disabled={pageNumber === 0}
      onClick={() => setPageNumber((prev) => prev - 3)}
      className={`px-4 py-2 rounded ${
        pageNumber === 0
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
      }`}
    >
      Prev
    </button>
    <p className="text-lg font-medium">{pageNumber / 3 + 1}</p>
    <button
      onClick={() => setPageNumber((prev) => prev + 3)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
    >
      Next
    </button>
  </div>
</div>

  );
};

export default FetchRQ;