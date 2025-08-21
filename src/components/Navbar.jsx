import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FiSearch, FiMic } from "react-icons/fi";
import { AiOutlineBell, AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#0f0f0f] sticky top-0 z-50">
      {/* Left Section (Menu + Logo) */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button className="p-2 rounded-full hover:bg-[#272727]">
          <HiOutlineMenu className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center space-x-1 cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            className="h-5 sm:h-6"
          />
          <span className="text-[9px] sm:text-[10px] text-gray-400 -mt-1">
            IN
          </span>
        </div>
      </div>

      {/* Middle Section (Search Bar) */}
      <div className="hidden sm:flex items-center w-full max-w-md lg:max-w-xl mx-4">
        {/* Input Box */}
        <div className="flex items-center flex-1 bg-[#121212] border border-[#303030] rounded-l-full px-4 py-[6px] focus-within:border-blue-500 focus-within:shadow-[0_0_0_1px_#3b82f6] transition-all">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none text-[15px] text-white placeholder-gray-400"
          />
        </div>

        {/* Search Button */}
        <button className="bg-[#222222] border border-[#303030] rounded-r-full px-4 sm:px-5 py-2 flex items-center justify-center hover:bg-[#303030]">
          <FiSearch className="w-5 h-5 text-gray-300" />
        </button>

        {/* Mic Button */}
        <button className="ml-2 sm:ml-3 bg-[#181818] p-2 rounded-full hover:bg-[#303030] transition">
          <FiMic className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Mobile Search Icon */}
      <div className="flex sm:hidden">
        <button className="p-2 rounded-full hover:bg-[#272727]">
          <FiSearch className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3 sm:space-x-5 text-white">
        <button className="hidden sm:flex items-center space-x-1 bg-[#3F3F3F] hover:bg-[#857c7c] px-3 py-1 rounded-full">
          <AiOutlinePlus className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden md:inline text-sm">Create</span>
        </button>

        <button className="p-2 rounded-full hover:bg-[#272727]">
          <AiOutlineBell className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full cursor-pointer overflow-hidden">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
