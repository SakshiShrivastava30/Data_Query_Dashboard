import React from "react";

const QueryResult = ({ result }) => {
  return (
    result && (
      <div className="w-full max-w-lg p-4 border rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <h2 className="text-lg font-semibold">Query Result:</h2>
        <p className="mt-2">{result}</p>
      </div>
    )
  );
};

export default QueryResult;
