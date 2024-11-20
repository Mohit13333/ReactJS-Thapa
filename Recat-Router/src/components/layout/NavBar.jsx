import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <section className="bg-black text-white py-4">
        <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">
          {/* Signup/Login Links */}
          <div className="space-x-4">
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                `px-4 py-2 rounded-lg ${
                  isPending
                    ? "bg-pink-400/70"
                    : isActive
                    ? "bg-pink-600"
                    : "bg-pink-500 hover:bg-pink-600"
                } transition-all`
              }
            >
              Signup
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                `px-4 py-2 rounded-lg border ${
                  isPending
                    ? "border-pink-400/70 text-pink-400/70"
                    : isActive
                    ? "border-pink-600 text-pink-600"
                    : "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                } transition-all`
              }
            >
              Login
            </NavLink>
          </div>
        </div>
      </section>

      <div className="bg-white shadow-md py-4">
        <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">
          {/* User Section */}
          <div>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                `text-lg font-semibold ${
                  isPending
                    ? "text-gray-600/70"
                    : isActive
                    ? "text-red-600"
                    : "text-black hover:text-red-600"
                } transition-all`
              }
            >
              Mohit Singh
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="flex space-x-6 text-sm font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    `transition-all ${
                      isPending
                        ? "text-gray-600/70"
                        : isActive
                        ? "text-red-600 font-bold"
                        : "text-black hover:text-red-600"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    `transition-all ${
                      isPending
                        ? "text-gray-600/70"
                        : isActive
                        ? "text-red-600 font-bold"
                        : "text-black hover:text-red-600"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive, isPending }) =>
                    `transition-all ${
                      isPending
                        ? "text-gray-600/70"
                        : isActive
                        ? "text-red-600 font-bold"
                        : "text-black hover:text-red-600"
                    }`
                  }
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    `transition-all ${
                      isPending
                        ? "text-gray-600/70"
                        : isActive
                        ? "text-red-600 font-bold"
                        : "text-black hover:text-red-600"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
