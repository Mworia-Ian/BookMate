import React from 'react';

function Review({ rating, setRating, index }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            key={star}
            className="star"
            style={{
              cursor: "pointer",
              color: rating >= star ? "gold" : "grey",
              fontSize: "35px",
            }}
            onClick={() => {
              setRating(index, star);
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export default Review;
