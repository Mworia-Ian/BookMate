import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex items-center w-full">
        <input
          type="text"
          placeholder="Search in BookMate"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-booknet-orange transition-all duration-300"
        />
        <button
          className="absolute right-2"
          onClick={() => setQuery('')}
          aria-label="Clear search"
        >
          {query ? (
            <span className="text-gray-500" aria-hidden="true">&times;</span>
          ) : (
            <span className="text-gray-500" aria-hidden="true">&#128269;</span> 
          )}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
