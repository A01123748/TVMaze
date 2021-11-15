import "../../App.css";
import React from "react";
import { Link, useParams } from "react-router-dom";

import { defaultImgUrl } from "../../constants";
import useMovieDetails from "../../hooks/useMovieDetails";
import StarRating from "../StarRating";
import { FaHome } from "react-icons/fa";
import { getRuntime, getScheduleTime } from "../../utils";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = useMovieDetails(movieId);
  const src = movie.image?.medium ?? defaultImgUrl;

  return (
    <div className="App">
      <div className="links">
        <Link to={"/"} className="link">
          <FaHome />
          Home
        </Link>
      </div>
      <div className="MovieDetails">
        <div className="img">
          <img src={src} alt={movie.name} />
        </div>
        <div className="details">
          <h1>
            <a href={movie.url} target="_blank" rel="noreferrer">
              {movie.name}
            </a>

            {movie.status && ` (${movie.status})`}
          </h1>
          {movie.genres?.length > 0 && (
            <p>{`Géneros: ${movie.genres.join(", ")}`}</p>
          )}
          {movie.schedule?.days?.length > 0 && (
            <p>
              {`Schedule: ${movie.schedule?.days?.join(", ")} ${getScheduleTime(
                movie.schedule?.time,
                movie.language
              )}`}
            </p>
          )}
          <p>Status: {movie.status}</p>
          <p>Duration: {getRuntime(movie.runtime ?? movie.averageRuntime)}</p>
          <StarRating rating={movie?.rating?.average / 2} disabled />
          <h2>Overview</h2>
          <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieDetails);
