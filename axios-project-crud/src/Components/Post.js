import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../Services/PostApi";
import AddForm from "./AddForm";

const Post = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({});
  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);

  //   delete post
  const handleDelete = async (id) => {
    const res = await deletePost(id);
    if (res.status === 200) {
      const newUpdatedPost = data.filter((curPost) => {
        return curPost.id !== id;
      });
      setData(newUpdatedPost);
    }
  };

  const handleUpdatePost = (curData) => {
    setUpdateData(curData);
  };

  return (
    <>
      <section>
        <AddForm
          data={data}
          setData={setData}
          updateData={updateData}
          setUpdateData={setUpdateData}
        />
      </section>
      <section className="py-8 px-4 bg-gradient-to-r from-gray-900 via-green-700 to-cyan-800">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.map((curData) => {
            const { id, body, title } = curData;
            return (
              <li
                key={id}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl border border-green-700 transition duration-300 transform hover:scale-105"
              >
                <p className="text-2xl text-white">{id}.</p>
                <p className="text-xl font-semibold text-white mb-2">
                  Title: {title}
                </p>
                <p className="text-gray-100 mb-4">{body}</p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => handleUpdatePost(curData)}
                    className="px-4 py-2 bg-white text-green-600 font-bold rounded-md hover:scale-110 hover:bg-gray-100 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-white text-red-600 font-bold rounded-md hover:scale-110 hover:bg-gray-100 transition duration-300"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Post;
