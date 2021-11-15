import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, setRating, disabled }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        index++;
        return (
          <button
            disabled={disabled}
            type="button"
            key={index}
            className={
              (index <= rating ? "off" : "on") + (disabled ? " disabled" : "")
            }
            onClick={() => {
              index === rating ? setRating(0) : setRating(index);
            }}
          >
            <FaStar className="star" />
          </button>
        );
      })}
    </div>
  );
};
export default React.memo(StarRating);
