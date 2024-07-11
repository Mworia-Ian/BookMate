import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    performSearch(newQuery, selectedCategory);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    performSearch(query, category);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      performSearch(query, selectedCategory);
    }
  };

  const performSearch = (searchQuery, category) => {
    // Implement your search logic here, e.g., make an API call
    console.log('Search query:', searchQuery);
    console.log('Selected category:', category);
    // Perform the search and update the state with the results if needed
  };

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
            value={query}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className="block w-full p-3 ps-12 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search in BookMate"
            required
          />
        </div>
      </div>
      <div className="flex space-x-1 flex-grow">
        {["Novels", "Education", "Kids", "Science", "Coding", "History", "Biography", "Self-Help"].map((label) => (
          <button
            key={label}
            onClick={() => handleCategoryClick(label)}
            className={`text-white ${selectedCategory === label ? 'bg-orange-600' : 'bg-orange-500'} hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base px-4 py-2 flex-1 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-400`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Search;
