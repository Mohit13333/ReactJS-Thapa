import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p className="flex items-center justify-center space-x-2 text-sm font-medium">
            <FaCopyright className="text-blue-500" />
            <span>
              {new Date().getFullYear()} Mohit Singh. All rights reserved.
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
