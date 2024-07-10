import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Search from "../Search";
import Review from "./Rating";

function Favourite() {
  const [CardData, setCardData] = useState([
    { rating: 1 }, { rating: 3 }, { rating: 4 }, 
    { rating: 2 }, { rating: 3 }, { rating: 3 },
    { rating: 3 }, { rating: 1 }, { rating: 2 },
    { rating: 4 }, { rating: 3 }, { rating: 2 },
    { rating: 5 }, { rating: 5 }, { rating: 3 },
    { rating: 1 }, { rating: 4 }, { rating: 4 },
    { rating: 2 }, { rating: 2 }, { rating: 5 },
    { rating: 3 }, { rating: 3 }, { rating: 5 },
  ]);

  function handleRatingChange(index, newRating) {
    const updatedCardData = [...CardData];
    updatedCardData[index].rating = newRating;
    setCardData(updatedCardData);
  }

  return (
    <div>
      <Navbar />
      <Search />
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {CardData.map((card, index) => (
          <div key={index} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-red-300 dark:bg-red-300 dark:hover:bg-red-400 md:flex-row">
            <img className="object-cover w-full rounded-t-lg h-48 md:h-48 md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/14104040/pexels-photo-14104040.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Noteworthy technology acquisitions 2021" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BOOK NAME</h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Author Name</p>
              <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400">PRICE ksh 1500</h4>
              <Review
                rating={card.rating}
                setRating={handleRatingChange}
                index={index}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourite;
