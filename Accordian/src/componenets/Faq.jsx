import { useState } from "react";
import { CiSquareChevDown, CiSquareChevUp } from "react-icons/ci";

const Faq = ({ curData,onToggle,isActive }) => {
  const { id, question, answer } = curData;
  return (
    <>
      <li
        key={id}
        className="mb-4 border border-gray-300 rounded-lg shadow-sm transition-transform duration-300"
      >
        <div
          onClick={onToggle}
          className="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          <p className="font-medium text-gray-800">{question}</p>
          {isActive ? (
            <CiSquareChevUp className="text-xl text-gray-600" />
          ) : (
            <CiSquareChevDown className="text-xl text-gray-600" />
          )}
        </div>
        {isActive && (
          <div className="p-4 bg-white text-gray-700">{answer}</div>
        )}
      </li>
    </>
  );
};

export default Faq;
