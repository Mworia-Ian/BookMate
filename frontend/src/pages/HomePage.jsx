import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import EndingSoonBids from "../components/EndingSoonBids";
import BooksForYou from "../components/BooksForYou";

function HomePage() {
  const [searchParams, setSearchParams] = useState({
    query: "",
    category: "",
    type: "",
  });

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-4 mb-6">
        <SearchBar onSearch={handleSearch} />
        <CategoryTabs
          onCategorySelect={(category) =>
            setSearchParams({ ...searchParams, category })
          }
        />
      </div>

      <EndingSoonBids />
      <BooksForYou searchParams={searchParams} />
    </div>
  );
}

export default HomePage;
