import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ results }) => {
  const listItems = results?.map((movie, index) => (
    <MovieCard {...movie} key={index} />
  ));

  return results?.length > 0 ? (
    <div className="MoviesList">{listItems}</div>
  ) : (
    <div className="EmptyMoviesList">
      <p>No movies found</p>
    </div>
  );
};

export default React.memo(MoviesList);
