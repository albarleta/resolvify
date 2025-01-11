import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      {/* Left part of the navbar (empty for now) */}
      <div></div>

      {/* Center message */}
      <div className="text-lg font-semibold text-white">User Navbar</div>

      {/* User profile */}
      <div className="flex items-center space-x-2">
        <span className="text-white">Username</span>
        {/* <img
          src="https://via.placeholder.com/40"
          alt="User profile"
          className="h-10 w-10 rounded-full"
        /> */}
        <FaRegUserCircle className="text-md text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
