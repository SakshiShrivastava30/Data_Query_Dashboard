import React, { useState } from "react";
import { Moon, Sun, Menu, X, MessageCircle } from "lucide-react";

const Sidebar = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* ☰ Menu Button (Hidden When Sidebar is Open) */}
      {!isOpen && (
        <button
          className="p-2 m-2 bg-gray-200 dark:bg-gray-700 rounded fixed left-2 top-2 z-50"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} className="text-gray-900 dark:text-gray-100" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 shadow-lg transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
      >
        {/* Sidebar Header with ✖ Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <h3 className="text-lg font-bold">Data Query Dashboard</h3>
          <button
            className="text-gray-300 text-xl hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* New Chat Button */}
        <button
          className={`flex items-center justify-center w-[90%] mx-auto my-4 p-2 rounded-md text-white transition 
          ${isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"}`}
          onClick={() => console.log("New Chat Open")}
        >
          <MessageCircle size={20} className="mr-2" />
          New Chat
        </button>

        {/* Query History Heading */}
        <h4 className={`text-sm px-4 mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Recent Chats</h4>

        {/* Query History List */}
        <ul className="mt-2">
          <li
            className={`p-2 border-b cursor-pointer transition
            ${isDarkMode ? "hover:bg-gray-700 border-gray-700" : "hover:bg-gray-200 border-gray-300"}`}
          >
            Query 1
          </li>
          <li
            className={`p-2 border-b cursor-pointer transition
            ${isDarkMode ? "hover:bg-gray-700 border-gray-700" : "hover:bg-gray-200 border-gray-300"}`}
          >
            Query 2
          </li>
        </ul>

        {/* Dark Mode Toggle (Bottom of Sidebar) */}
        <div className="absolute bottom-4 left-4 flex items-center">
          <button
            className="p-2 rounded-full bg-gray-600 dark:bg-gray-700 text-white transition"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;