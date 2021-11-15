import React from "react";
import { Link } from "react-router-dom";
import { defaultImgUrl } from "../constants";
import { getRuntime, getScheduleTime } from "../utils";
import StarRating from "./StarRating";

const MovieCard = (movie) => {
  const src = movie.image?.medium ?? defaultImgUrl;
  return (
    <div className="MovieCard" key={movie.id}>
      <Link to={`details/${movie.id}`}>
        <img src={src} alt={movie.name} />{" "}
      </Link>
      <p className="MovieCardItem">{movie.name}</p>
      {movie.schedule?.days?.length > 0 && (
        <p className="MovieCardItem">
          {`Schedule: ${movie.schedule?.days?.join(", ")} ${getScheduleTime(
            movie.schedule?.time,
            movie.language
          )}`}
        </p>
      )}
      <StarRating
        className="MovieCardItem"
        rating={movie.rating.average / 2}
        disabled
      />
      <p className="MovieCardItem">
        Duration: {getRuntime(movie.runtime ?? movie.averageRuntime)}
      </p>
    </div>
  );
};

export default React.memo(MovieCard);
