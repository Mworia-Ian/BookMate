import React from "react";

function Search({ searchTerm, handleSearch }) {
  return (
    <div className="flex items-center space-x-2 mt-5 ml-5">
      <div className="flex-grow flex">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative flex-1">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 ps-12 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search in BookMate"
            value={searchTerm}
            onChange={handleSearch}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
