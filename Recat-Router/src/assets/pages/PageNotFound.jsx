import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();
  const errorMessage =
    error?.statusText || error?.message || "Oops! Page not found.";
    const navigate=useNavigate();
    const handleGoBack=() => {
        navigate(-1);
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center space-y-6 animate-slide-down">
        <h1 className="text-8xl font-extrabold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold text-white">{errorMessage}</h2>
        <p className="text-lg text-green-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink
          to="/"
          className="inline-block px-8 py-3 mt-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition-all duration-300"
        >
          Go Back Home
        </NavLink>
        <button className="inline-block px-8 py-3 mt-4 ml-5 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition-all duration-300" onClick={handleGoBack}>
          Go back to previous page
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
