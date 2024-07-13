import React, { useRef, useEffect, useState } from 'react';

function CategoryTabs() {
  const categories = ['Novels', 'Education', 'Kids', 'Science', 'Coding', 'History', 'Biography', 'Self-Help'];
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const tabsRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (tabsRef.current) {
        setShowScrollButtons(tabsRef.current.scrollWidth > tabsRef.current.clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full flex justify-center">
      {showScrollButtons && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow z-10"
          aria-label="Scroll left"
        >
          ◀
        </button>
      )}
      <div 
        ref={tabsRef}
        className="flex space-x-2 overflow-x-auto scrollbar-hide py-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-be5a36 text-white rounded-lg hover:bg-be5a36-dark whitespace-nowrap flex-shrink-0 transition-colors duration-200"
          >
            {category}
          </button>
        ))}
      </div>
      {showScrollButtons && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow z-10"
          aria-label="Scroll right"
        >
          ▶
        </button>
      )}
    </div>
  );
}

export default CategoryTabs;
