import React from "react";
import { NavLink } from "react-router-dom";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start px-6 space-y-8 lg:space-y-0">
        <div className="lg:w-1/3 space-y-4">
          <img src="/logo.jpeg" alt="Logo" className="w-24 rounded-xl" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Welcome to Mohit Singh, your ultimate destination for cutting-edge
            gadgets!
          </p>
          <div className="flex space-x-3">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center text-center md:text-left lg:justify-center lg:space-x-10 lg:w-2/3">
          <div className="space-y-3">
            <h4 className="font-bold text-pink-500 mb-3">SHOPPING</h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/computer-store"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-500 transition-all duration-300"
                  }
                >
                  Computer Store
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/laptop-store"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-500 transition-all duration-300"
                  }
                >
                  Laptop Store
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/accessories"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-500 transition-all duration-300"
                  }
                >
                  Accessories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sales-discount"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-500 transition-all duration-300"
                  }
                >
                  Sales & Discount
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="space-y-3 mt-8 md:mt-0">
            <h4 className="font-bold text-pink-500 mb-3">EXPERIENCE</h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-500 transition-all duration-300"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/payment-method"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-500 transition-all duration-300"
                  }
                >
                  Payment Method
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/delivery"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-500 transition-all duration-300"
                  }
                >
                  Delivery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/return-exchange"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-500 transition-all duration-300"
                  }
                >
                  Return and Exchange
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/3 space-y-4">
          <h4 className="font-bold text-pink-500 mb-3">NEWSLETTER</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Be the first to know about new arrivals, sales & promos!
          </p>
          <form className="mt-4 flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg shadow-md transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-4 mt-6 text-sm text-gray-400">
        © 2024 Mohit Singh. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
