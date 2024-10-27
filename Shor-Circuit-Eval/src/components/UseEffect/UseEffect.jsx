import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("Hello world");
    console.log(count);
  }, [count]);
  return (
    <div className="grid justify-center text-2xl font-bold text-white gap-[5px]">
      <h1 className="text-center text-white text-3xl font-bold ">
        Hello useEffect
      </h1>
      <p>Count: {count}</p>
      <button
        className="bg-red-500 rounded-md p-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default UseEffect;
