import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuery } from "../redux/querySlice";
import { Search } from "lucide-react";
import QueryResult from "./QueryResult"; // Import QueryResult

const data = [
  { id: 1, title: "How to set up React", content: "To set up React, you need Node.js installed. Then, you can use Create React App." },
  { id: 2, title: "What is Redux?", content: "Redux is a state management library for JavaScript apps, commonly used with React." },
  { id: 3, title: "What is a state in React?", content: "State is an object that represents the parts of the app that can change over time." },
  { id: 4, title: "How does React work?", content: "React works by creating a virtual DOM that efficiently updates the actual DOM." },
  { id: 5, title: "What is democratized data insight?", content: "Democratizing data insights means making data analysis accessible to non-technical teams so they can ask questions and get instant insights without relying on data teams." }
];

const QueryInput = ({ setQueryResult, queryResult }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [response, setResponse] = useState(""); // Store Response

  const handleQuerySubmit = () => {
    if (query.trim() !== "") {
      dispatch(addQuery(query));

      const queryWords = query.trim().toLowerCase().split(/\s+/);
      const filteredResults = data.filter((item) =>
        queryWords.some(
          (word) =>
            item.title.toLowerCase().includes(word) ||
            item.content.toLowerCase().includes(word)
        )
      );

      const result = filteredResults.length > 0 ? filteredResults[0].content : null;
      setQueryResult(result);
      setResponse(result || "No relevant data found."); // Store Response
      setQuery(""); // Clear input
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleQuerySubmit();
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full pt-4">
      {/* Query Result (Top Pe Hoga) */}
      <QueryResult result={queryResult} />

      {/* Response Box (Query Result Ke Neeche) */}
      {response && (
        <div className={`w-full max-w-lg p-4 border rounded mt-2 ${response === "No relevant data found." ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"}`}>
          <p>{response}</p>
        </div>
      )}

      {/* Search Bar (Fixed Bottom) */}
      <div className="w-full max-w-2xl p-4 fixed bottom-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex items-center">
        {/* Search Input Field */}
        <div className="relative flex-grow">
          <input
            type="text"
            className="w-full pl-4 pr-12 p-3 border border-gray-300 dark:border-gray-600 rounded-full text-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Enter your query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          {/* Search Icon (Right Side, Dark on Type) */}
          <button
            onClick={handleQuerySubmit}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              query ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-300"
            }`}
          >
            <Search size={24} />
          </button>
        </div>

        {/* Gap between Input and Button */}
        <div className="w-4"></div>

        {/* Search Button */}
        <button
          onClick={handleQuerySubmit}
          className="bg-blue-800 dark:bg-blue-600 text-white px-6 py-3 rounded-full text-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default QueryInput;
