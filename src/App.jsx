import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import QueryInput from "./components/QueryInput";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [queryResult, setQueryResult] = useState(""); // ✅ Add this state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen flex`}>
      <Sidebar isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex flex-col flex-grow items-center justify-center w-full p-6">
        {/* ✅ Pass setQueryResult and queryResult */}
        <QueryInput darkMode={darkMode} setQueryResult={setQueryResult}  />
      </div>
    </div>
  );
};

export default App;

