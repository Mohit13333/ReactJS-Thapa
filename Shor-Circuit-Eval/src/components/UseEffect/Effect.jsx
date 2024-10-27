import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("Mohit");

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-center text-3xl font-bold mb-6 text-yellow-400">
          Hello useEffect
        </h1>

        <p className="text-center text-2xl font-semibold mb-4">
          Count: <span className="text-yellow-300">{count}</span>
        </p>

        <button
          className="bg-red-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full mb-6 transition-all duration-300"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <form className="flex flex-col items-center">
          <label className="mb-2 text-lg text-gray-300">
            The input is: <span className="text-yellow-300">{input}</span>
          </label>
          <input
            type="text"
            className="bg-gray-700 border border-gray-600 rounded py-2 px-4 text-black w-full text-center focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Effect;
