import React, { useState } from 'react';
import Navbar from '../Navbar';
import Search from '../Search';
import Review from './Rating';

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
      <div className="p-6">
        <div className="text-left font-bold text-3xl mb-4">
          Ending Soon Bids
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CardData.slice(0, 3).map((card, index) => (
            <div key={index} className="flex flex-col items-start bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 dark:border-gray-500 dark:border-gray-50 dark:hover:border-gray-200 p-6">
              <img className="object-cover w-full rounded-t-lg h-48" src="https://images.pexels.com/photos/14104040/pexels-photo-14104040.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Noteworthy technology acquisitions 2021" />
              <div className="flex flex-col justify-start p-4 leading-normal text-sm md:text-base w-full">
                <div className="mb-2 text-sm font-medium text-orange-600">Closes in 8hrs 11min</div>
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Book Name</h2>
                <p className="mb-3 font-normal text-gray-600 dark:text-gray-600">Author Name</p>
                <Review
                  rating={card.rating}
                  setRating={handleRatingChange}
                  index={index}
                />
                <h4 className="mb-3 font-bold text-gray-800 dark:text-gray-800">Rs.500.00</h4>
                <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                  Place Bid
                </button>
              </div>
            </div>
          ))}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-left font-bold text-3xl mt-4">
            Books for You
          </div>
          {CardData.slice(3).map((card, index) => (
            <div key={index + 3} className="flex flex-col items-start bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 dark:border-gray-500 dark:border-gray-50 dark:hover:border-gray-200 p-6">
              <img className="object-cover w-full rounded-t-lg h-48" src="https://images.pexels.com/photos/14104040/pexels-photo-14104040.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Noteworthy technology acquisitions 2021" />
              <div className="flex flex-col justify-start p-4 leading-normal text-sm md:text-base w-full">
                {/* This condition ensures that "Closes in 8hrs 11min" is not displayed */}
                {index + 3 < 3 ? (
                  <div className="mb-2 text-sm font-medium text-orange-600">Closes in 8hrs 11min</div>
                ) : null}
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Book Name</h2>
                <p className="mb-3 font-normal text-gray-600 dark:text-gray-600">Author Name</p>
                <Review
                  rating={card.rating}
                  setRating={handleRatingChange}
                  index={index + 3}
                />
                <h4 className="mb-3 font-bold text-gray-800 dark:text-gray-800">Rs.500.00</h4>
                <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourite;
